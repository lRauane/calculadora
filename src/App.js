import { Container, Content, Row, Column  } from "./style";
import Input from "./components/input";
import Button from "./components/button";

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
          <Button label='1'/>
          <Button label='2'/>
          <Button label='3'/>
          <Button label='4'/>
        </Row>
        <Row>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='7'/>
          <Button label='8'/>
        </Row>
        <Row>
          <Button label='9'/>
          <Button label=''/>
          <Button label='1'/>
          <Button label='1'/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
