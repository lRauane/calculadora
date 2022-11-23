import { Container, Content, Row } from "./style";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";

const App = () => {
  // inicio do estado
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firsNumber, setFirstNumber] = useState("0");
  const [operations, setOperations] = useState("");

  // limpar numeros
  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperations("");
  };

  // adicionar um número
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  // 

  // somar
  const handleSOMA = () => {
    if (firsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("+");
    } else {
      const soma = Number(firsNumber) + Number(currentNumber);
      setCurrentNumber(String(soma));
      setOperations("");
    }
  };

  // subtração
  const handleSub = () => {
    if (firsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("-");
    } else {
      const sub = Number(firsNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperations("");
    }
  };

  // Multiplicação
  const handlemulti = () => {
    if (firsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("*");
    } else {
      const multi = Number(firsNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperations("");
    }
  };

  //  divisão
  const handleDivi = () => {
    if (firsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("/");
    } else {
      const divi = Number(firsNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setOperations("");
    }
  };

  // exibir resultado
  const handleEquals = () => {
    if (firsNumber !== "0" && operations !== "" && currentNumber !== "0") {
      switch (operations) {
        case "+":
          handleSOMA();
          break;

        case "-":
          handleSub();
          break;
        case "*":
          handlemulti();
          break;
        case "/":
          handleDivi();
          break;

        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handlemulti }/>
          <Button label="/" onClick={handleDivi}/>
          <Button label="C" onClick={handleClear} />
          <Button label="." onClick={() => handleAddNumber(".")}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSub} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSOMA} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
