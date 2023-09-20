import styled, { css } from "styled-components";

export default styled.button`
  font-family: "roboto";
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  margin: 7px;
  padding: 7px 10px;
  transition: all 0.7s;
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}
  color: white;
  &:hover {
    
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  }
`;
