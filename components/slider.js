import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from '@chakra-ui/react'
import React from 'react'

function SliderThumbWithTooltip({year, setyear}) {
  const [sliderValue, setSliderValue] = React.useState(2022)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      id="slider"
      defaultValue={2022}
      min={2015}
      max={2022}
      step={1}
      colorScheme="linkedin"
      onChange={v =>{
        setSliderValue(v);
        setyear(v);
      }
      }
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={2015} mt="2" ml="-2.5" fontSize="sm">
        2015
      </SliderMark>
      <SliderMark value={2017} mt="2" ml="-2.5" fontSize="sm">
        2017
      </SliderMark>
      <SliderMark value={2019} mt="2" ml="-2.5" fontSize="sm">
        2019
      </SliderMark>
      <SliderMark value={2021} mt="2" ml="-2.5" fontSize="sm">
        2021
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="blue.600"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export default SliderThumbWithTooltip
