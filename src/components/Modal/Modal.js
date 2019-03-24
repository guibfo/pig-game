import React from 'react'
import PropTypes from 'prop-types'
import { Overlay, Content, Wrapper, Close } from './styled'
import CloseButton from 'react-ionicons/lib/IosClose'

const Modal = props => {
  return (
    <Wrapper className='modal' isOpen={props.isOpen}>
      <Overlay className="overlay" { ...props } />
      <Content className='modal-content'>
        <Close onClick={props.onClick}><CloseButton fontSize='32px' color='#ffffff' /></Close>
        {props.content}
      </Content>
    </Wrapper>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.element,
  onClick: PropTypes.func
}

export default Modal
