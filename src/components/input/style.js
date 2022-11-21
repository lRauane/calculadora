import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #ffaaaa;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    background-color: #ffaaaa;
    border: 4px solid salmon;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;
    color: salmon;

    font-size: 26px;
    font-family: "Roboto";
  }
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
