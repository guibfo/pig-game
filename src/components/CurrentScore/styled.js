import styled from 'styled-components'

export const Box = styled.div`
  background-color: #EB4D4D;
  color: #fff;
  margin: 0 auto;
  max-width: 100px;
  padding: 12px;
  text-align: center;
  width: 70%;

  @media (min-width: 1170px) {
    max-width: 120px;
  }
`

export const Label = styled.h4`
  color: #222;
  font-size: 12px;
  font-weight: 300;
  margin: 0 0 10px;
  text-transform: uppercase;
`

export const Score = styled.p`
  font-size: 30px;
  margin: 0;
`
