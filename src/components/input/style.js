import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #343A40;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    background-color: #343A40;
    border: 4px solid #6E7371;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;
    color: #6E7371;

    font-size: 26px;
    font-family: "Roboto";
  }
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
