import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  width: 50px;

  img {
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
  }

  @media (min-width: 1170px) {
    top: 30%;
    width: 100px;
  }
`
