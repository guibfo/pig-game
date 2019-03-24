import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 600px;
  padding: 100px;
  width: 50%;

  &.active {
    background: #f7f7f7;

    h2:after {
      background-color: #eb4d4d;
    }
  }
`

export const Name = styled.h2`
  font-size: 40px;
  font-weight: 100;
  letter-spacing: 2px;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  &:after {
    background-color: transparent;
    border-radius: 50%;
    content: '';
    height: 15px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
  }
`

export const TotalScore = styled.div`
  color: #eb4d4d;
  font-size: 80px;
  font-weight: 100;
  margin-bottom: 130px;
  text-align: center;
`
