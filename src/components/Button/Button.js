import styled from "styled-components";
import { darken } from 'polished';

const Btn = styled.button`
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  color:  ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.accentColor};
  cursor: pointer;
  transition: background .1s;
  border: none;
  border-radius: 3px;
  font-size: 1.2rem;

  &:hover {
    background: ${props => darken(0.1, props.theme.colors.accentColor)};
  }
`


const  Button = ({ onClick, children }) => {
  return <Btn onClick={onClick}>{ children }</Btn>;
}

export default Button;
