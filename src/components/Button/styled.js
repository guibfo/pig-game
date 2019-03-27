import styled from 'styled-components'

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  left: ${props => props.position[1] || '50%'};
  line-height: 1.3;
  min-width: 185px;
  position: absolute;
  text-transform: uppercase;
  top: ${props => props.position[0]};
  transform: translateX(-50%);
  transition: background-color 0.3s, color 0.3s;

  svg {
    display: inline-block;
    margin-right: 15px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
  }

  &:hover {
    font-weight: 600;

    svg {
      margin-right: 20px;
    }
  }

  @media (max-width: 1169px) {

    svg {
      height: 25px;
      width: 25px;
    }
  }

  @media (min-width: 1170px) {
    font-size: 20px;
  }
`
