import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import BasketBtn from "./Basket/HeaderBtn";
export const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext);
  const [animationClass, setAnimationClass] = useState();

  const calculateTotalAmount = () => {
    const sum = items.reduce((summa, item) => {
      return summa + item.amount;
    }, 0);
    return sum;
  };
  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass(" ");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketBtn
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      ></BasketBtn>
    </Container>
  );
};
//style
const Container = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  height: 6.31rem;
  background: #8a2b06;
  display: flex;
  justify-content: space-between;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  align-items: center;
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
