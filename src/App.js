import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Meals } from "./components/Meals/Meals";
import { Basket } from "./components/Basket/Basket";
import styled from "styled-components";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  const [isBasketVisible, setBasketVisible] = useState(false);
  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <Provider store={store}>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </Provider>
  );
}

export default App;
const Content = styled.div`
  margin-top: 101px;
`;
