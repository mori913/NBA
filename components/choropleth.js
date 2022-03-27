import * as React from 'react'
import * as d3module from 'd3'
import d3tip from 'd3-tip'
import { Container } from '@chakra-ui/react'
const d3 = {
  ...d3module,
  tip: d3tip
}


function drawChart(svgRef) {
  //Width and height of map
  var width = 960
  var height = 500

  // D3 Projection
  var projection = d3
    .geoAlbersUsa()
    .translate([width / 2, height / 2]) // translate to center of screen
    .scale([1000]) // scale things down so see entire US

  // Define path generator
  var path = d3
    .geoPath() // path generator that will convert GeoJSON to SVG paths
    .projection(projection) // tell path generator to use albersUsa projection

  // Define linear scale for output
  var color = d3
    .scaleLinear()
    .range([
      'rgb(213,222,217)',
      'rgb(69,173,168)',
      'rgb(84,36,55)',
      'rgb(217,91,67)'
    ])

  var legendText = ['>=30%', '20-30%', '10-20%', '<10%']

  //Create SVG element and append map to the SVG
  const svg = d3
    .select(svgRef.current)
    .attr('width', width)
    .attr('id',"chart")
    .attr('height', height)

  // Append Div for tooltip to SVG
  var tip = d3.tip().attr("id", "tooltip").attr('class', 'd3-tip');

  // Load in my states data!
  d3.csv('stateslived.csv').then(function (data) {
    color.domain([0, 1, 2, 3]) // setting the range of the input data

    // Load GeoJSON data and merge with states data
    d3.json('us-states.json')
      .then(function (json) {
        // Loop through each state data value in the .csv file
        for (var i = 0; i < data.length; i++) {
          // Grab State Name
          var dataState = data[i].state

          // Grab data value
          var dataValue = data[i].visited

          // Find the corresponding state inside the GeoJSON
          for (var j = 0; j < json.features.length; j++) {
            var jsonState = json.features[j].properties.name

            if (dataState == jsonState) {
              // Copy the data value into the JSON
              json.features[j].properties.visited = dataValue

              // Stop looking through the JSON
              break
            }
          }
        }

        // Bind the data to the SVG and create one path per GeoJSON feature
        svg
          .selectAll('path')
          .data(json.features)
          .enter()
          .append('path')
          .attr('d', path)
          .style('stroke', '#fff')
          .style('stroke-width', '1')
          .style('fill', function (d) {
            // Get data value
            var value = d.properties.visited

            if (value) {
              //If value exists…
              return color(value)
            } else {
              //If value is undefined…
              return 'rgb(213,222,217)'
            }
          })

        // Map the cities I have lived in!
        d3.csv('cities-lived.csv').then(function (data) {

          tip.html(function(d){
            return "Country"
          })

          svg
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
              return projection([d.lon, d.lat])[0]
            })
            .attr('cy', function (d) {
              return projection([d.lon, d.lat])[1]
            })
            .attr('r', function (d) {
              return Math.sqrt(d.years) * 4
            })
            .style('fill', 'rgb(217,91,67)')
            .style('opacity', 0.85)
            .call(tip)

            // Modification of custom tooltip code provided by Malcolm Maclean, "D3 Tips and Tricks"
            // http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html
            .on('mouseover', tip.show)

            // fade out tooltip on mouse out
            .on('mouseout', tip.hide)
        })

        // Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
        var legend = d3
          .select('#chart')
          .append('svg')
          .attr('class', 'legend')
          .attr('width', 140)
          .attr('height', 200)
          .attr('transform',  'translate(780,' + 350 +')'
          )
          .selectAll('g')
          .data(color.domain().slice().reverse())
          .enter()
          .append('g')
          .attr('transform', function (d, i) {
            return 'translate(0,' + i * 20 +')'
          })

        legend
          .append('rect')
          .attr('width', 18)
          .attr('height', 18)
          .style('fill', color)

        legend
          .append('text')
          .data(legendText)
          .attr('x', 24)
          .attr('y', 9)
          .attr('dy', '.35em')
          .text(function (d) {
            return d
          })
      })
      .catch(error => {
        console.error(error.message)
      })
  })
}

const Chart = () => {
  const svg = React.useRef(null)
  React.useEffect(() => {
    drawChart(svg)
  }, [svg])

  return (
    <Container  maxW="Container.lg">
      <svg ref={svg} />
    </Container>
  )
}

export default Chart
