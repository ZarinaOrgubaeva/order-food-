import styled from "styled-components";
import BasketBtn from "./Basket/HeaderBtn";
export const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketBtn>
     </BasketBtn>
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

