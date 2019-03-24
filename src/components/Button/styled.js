import styled from 'styled-components'

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  left: ${props => props.position[1] || '50%'};
  position: absolute;
  text-transform: uppercase;
  top: ${props => props.position[0]};
  transform: translateX(-50%);
  transition: background-color 0.3s, color 0.3s;
  width: 200px;

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
`
