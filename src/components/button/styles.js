import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 3px solid  #A1A69C;

  background-color: #1A1E26;
  color: white;
  font-size: 26px;
  font-weight: 700;
  flex: 1;
  &:hover{
    box-shadow: 5px 5px 0px #08090D;
    opacity: 0.5;
    transition: all .3s ease;
  }
`;
