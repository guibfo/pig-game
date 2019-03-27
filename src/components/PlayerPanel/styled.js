import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 600px;
  padding: 10px;
  width: 50%;

  &.active {
    background: #f7f7f7;

    h2:after {
      background-color: #eb4d4d;
    }
  }

  @media (min-width: 1170px) {
    padding: 100px;
  }
`

export const Name = styled.h2`
  font-size: 25px;
  font-weight: 100;
  letter-spacing: 2px;
  margin-bottom: 10px;
  margin-top: 55px;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  &:after {
    background-color: transparent;
    border-radius: 50%;
    content: '';
    height: 15px;
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
  }

  @media (min-width: 450px) {

    &:after {
      right: 20px;
    }
  }

  @media (min-width: 1170px) {
    font-size: 40px;
    margin-top: 20px;
  }
`

export const TotalScore = styled.div`
  color: #eb4d4d;
  font-size: 50px;
  font-weight: 100;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 1170px) {
    font-size: 80px;
    margin-bottom: 130px;
  }
`
