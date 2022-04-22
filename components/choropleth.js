import * as React from 'react'
import * as d3module from 'd3'
import d3tip from 'd3-tip'
import result from '/public/result'
import { Container, UnorderedList, ListItem } from '@chakra-ui/react'
const d3 = {
  ...d3module,
  tip: d3tip
}

// let predict_result = result.filter(d => d.year === 21)
function drawChart(svgRef, year) {
  let predict_result = result.filter(d => d.year === year%100 -1)
  // console.log(year)
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

  var legendText = ['>=6%', '4-6%', '2-4%', '<2%']

  //Create SVG element and append map to the SVG
  const svg = d3
    .select(svgRef.current)
    .attr('width', width)
    .attr('id', 'chart')
    .attr('height', height)

  // Append Div for tooltip to SVG

  var tip = d3
    .tip()
    .attr('id', 'tooltip')
    .attr('class', 'd3-tip')
    .style('display', 'flex')
    .style(
      'box-shadow',
      '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)'
    )
    .style('flex-direction', 'column')
    .style('background', 'white')
    .style('padding', '15px 15px')

  // Load states data!
  //d3.csv('stateslived.csv').then(function (data) {
  color.domain([0, 1, 2, 3]) // setting the range of the input data

  // Load GeoJSON data and merge with states data
  d3.json('us-states.json').then(
    function (json) {
      d3.csv('NBA_Clubs_Location_Economy.csv').then(function (data) {
        //console.log(data)

        tip.html(
          d => `
          <div class="tip">
            <strong> ${d.target.__data__['Club name']}</strong>
            <br>GDP $Millon: ${d.target.__data__['Metro GDP in $Millon']}
            <br>Possibility: ${d.target.__data__['prediction'] + '%'}
          </div>
        `
        )
        let filter_data = data.filter(function (d) {
          if (d.Year == '2021') {
            return d
          }
        })

        filter_data.map(val => {
          const club = val['Club name']
          const club_result = predict_result.find(elem => elem['TEAM'] == club)
          if (club_result === undefined) {
            val['prediction'] = 0
          } else {
            val['prediction'] = Math.round(club_result['prediction'] * 100)
          }
          const state = val['Arena Location'].split(', ')[1]
          val['state'] = state
          //
        })
        // console.log(filter_data)
        json.features.map(d => {
          d.properties.predictions = []
        })
        // Loop through each state data value in the .csv file
        for (var i = 0; i < filter_data.length; i++) {
          // Grab State Name
          var dataState = filter_data[i].state
          // console.log(dataState)

          // Grab data value
          var dataValue = filter_data[i].prediction
          // console.log(dataValue)

          // Find the corresponding state inside the GeoJSON
          for (var j = 0; j < json.features.length; j++) {
            var jsonState = json.features[j].properties.name

            if (dataState == jsonState) {
              // Copy the data value into the JSON
              json.features[j].properties.predictions.push(dataValue)

              // Stop looking through the JSON
              break
            }
          }
          json.features.map(d => {
            if(d.properties.predictions.length === 0){
              d.properties.color = 0;
            }else{
              let total = 0;
              let count = 0;

              d.properties.predictions.forEach(function(item, index){
                total += item;
                count++;
              });

              const average = total/count;
              if(average >= 6){
                d.properties.color = 3;
              }else if(average>= 4){
                d.properties.color =2;
              }else if(average >=2){
                d.properties.color =1;
              }else{
                d.properties.color = 0;
              }
            }
          })
          // console.log(json.features)
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
            var value = d.properties.color

            if (value) {
              //If value exists…
              return color(value)
            } else {
              //If value is undefined…
              return 'rgb(213,222,217)'
            }
          })

        // console.log(filter_data)
        // console.log(predict_result)
        svg
          .selectAll('circle')
          .data(filter_data)
          .enter()
          .append('circle')
          .attr('cx', function (d) {
            let lat = parseFloat(d.Latitude)
            let lon = parseFloat(d.Longitude)
            // console.log(d.Abbreviation)
            if (d.Abbreviation == 'BKN' || d.Abbreviation == 'LAC') {
              lat = lat - 3
            }
            return projection([lon, lat])[0]
          })
          .attr('cy', function (d) {
            let lat = parseFloat(d.Latitude)
            let lon = parseFloat(d.Longitude)
            return projection([lon, lat])[1]
          })
          .attr('r', 10)
          .style('fill', '#3182CE')
          .style('opacity', 0.85)
          .call(tip)
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
        .attr('transform', 'translate(780,' + 350 + ')')
        .selectAll('g')
        .data(color.domain().slice().reverse())
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
          return 'translate(0,' + i * 20 + ')'
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
    }
    // )
    // .catch(error => {
    //   console.error(error.message)
    // })
  )
}

const Chart = ({year}) => {
  // console.log(year)
  const date = year;
  const svg = React.useRef(null)
  React.useEffect(
    () => {
      console.log(date)
      d3.select("#chart").selectAll("*").remove();
      drawChart(svg, date)
    },
    [{svg,date}]
  )

  return (
    <Container maxW="Container.lg">
      <svg ref={svg} />
    </Container>
  )
}

export default Chart
