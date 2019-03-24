import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = props => {
  return (
    <StyledButton { ...props } position={props.position}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  position: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
