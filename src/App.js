import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Meals } from "./components/Meals/Meals";
import { Basket } from "./components/Basket/Basket";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header />
      <Content>
      <Summary />
      <Meals />
      <Basket/>
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
margin-top: 101px;
`
