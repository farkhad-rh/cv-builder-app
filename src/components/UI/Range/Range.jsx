import { useState } from 'react'

import styled from 'styled-components'

import Descr from '../Descr'

const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
`

const Input = styled.input`
  width: 97%;
  height: 6px;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;
  margin: 0 0.4rem;

  &::-webkit-slider-runnable-track {
    background-color: #ddd;
  }

  &::-webkit-slider-thumb {
    width: 20px;
    height: 40px;
    background-color: var(--ui-primary-color);
    box-shadow: -100vw 0 0 100vw var(--ui-primary-color);
    border: 1px solid #ddd;
    -webkit-appearance: none;
  }
`

const Range = () => {
  const [value, setValue] = useState(90)

  return (
    <Wrapper>
      <Descr>Name - {value}</Descr>

      <Input
        type='range'
        min='0'
        max='100'
        step='10'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Wrapper>
  )
}

export default Range
