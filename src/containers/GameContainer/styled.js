import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  left: 50%;
  max-width: 98%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;

  @media (max-width: 1169px) {
    height: 98%;
  }
`

export const ModalTitle = styled.h3`
  text-align: center;
  width: 100%;
`

export const ModalText = styled.p`
  margin-bottom: 5px;
  margin-top: 0;
  width: 100%;
`

export const InputWrapper = styled.div`
  bottom: 2%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%);

  @media (min-width: 1170px) {
    bottom: 50px;
  }
`

export const ScoreInput = styled.input`
  margin-top: 10px;
  text-align: center;
  width: 100px;
`
