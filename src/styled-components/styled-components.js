import styled from "styled-components";

//  default displays as white button
//  add primary to display as black button
/* <StyledButton primary>Will display as black button</StyledButton> */

export const StyledButton = styled.button`
  padding: 14px 28px;
  text-decoration: none;
  border-radius: 10px;
  border: solid ${(props) => (props.primary ? "black" : "white")} 2px;
  background-color: ${(props) => (props.primary ? "black" : "white")};
  cursor: pointer;
  color: ${(props) => (props.primary ? "white" : "black")};
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  &:hover {
    color: ${(props) => (props.primary ? "black" : "white")};
    background-color: transparent;
  }
`;

export const ModalBackdrop = styled.div`
  background-color: #212121;
  opacity: 0.75;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`