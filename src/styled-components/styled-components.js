import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 14px 28px;
  text-decoration: none;
  border-radius: 10px;
  border: solid ${props => props.primary ? 'black' : 'white'} 2px;
  background-color: ${props => props.primary ? 'black' : 'white'};
  cursor: pointer;
  color:${props => props.primary ? 'white' : 'black'};
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  &:hover {
    color: ${props => props.primary ? 'black' : 'white'};
    background-color: transparent;
  }
`;
