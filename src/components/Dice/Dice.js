import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'

const Dice = props => {
  return (
    <Wrapper>
      <img src={`assets/images/dice-${props.value}.png`} alt='' />
    </Wrapper>
  )
}

Dice.propTypes = {
  value: PropTypes.number
}

export default Dice
