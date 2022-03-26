import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from '@chakra-ui/react'
import React from 'react'

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      id="slider"
      defaultValue={5}
      min={0}
      max={100}
      step={12.5}
      colorScheme="linkedin"
      onChange={v => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={0} mt="2" ml="-2.5" fontSize="sm">
        2014
      </SliderMark>
      <SliderMark value={25} mt="2" ml="-2.5" fontSize="sm">
        2016
      </SliderMark>
      <SliderMark value={50} mt="2" ml="-2.5" fontSize="sm">
        2018
      </SliderMark>
      <SliderMark value={75} mt="2" ml="-2.5" fontSize="sm">
        2020
      </SliderMark>
      <SliderMark value={100} mt="2" ml="-2.5" fontSize="sm">
        2022
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
        label={`${sliderValue/12.5+2014}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export default SliderThumbWithTooltip
