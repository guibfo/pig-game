import styled, { css } from 'styled-components'

export const Wrapper = styled.div`

  ${props => props.isOpen && css`
    .overlay {
      height: 100vh;
      opacity: 1;
    }

    .modal-content {
      top: 50%;
    }
  `}
`

export const Overlay = styled.div`
  background-color: rgba(34, 34, 34, 0.8);
  display: block;
  height: 0;
  opacity: 0;
  position: fixed;
  transition: opacity 0.35s ease;
  width: 100%;
  z-index: 10;
`

export const Content = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  left: 50%;
  max-height: 95%;
  min-height: 300px;
  max-width: 500px;
  overflow: auto;
  padding: 20px;
  position: absolute;
  top: -50%;
  transform: translate(-50%, -50%);
  transition: top 0.35s ease-in-out;
  width: 95%;
  z-index: 15;
`

export const Close = styled.button`
  background-color: #eb4d4d;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  padding: 0;
  position: absolute;
  right: 10px;
  z-index: 50;
`
