import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = props => {
  return (
    <StyledButton onClick={props.onClick} position={props.position}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
