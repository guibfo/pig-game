import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = props => {
  return (
    <StyledButton position={props.position}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  position: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
