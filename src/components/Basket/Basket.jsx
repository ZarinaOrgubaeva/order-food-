import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
export const Basket = () => {
  const items = [
    {
      id: "meal",
      title: "Sushi",
      price: 22.99,
      amount: 1,
    },
    {
      id: "meal2",
      title: "Schnitzel",
      amount: 1,
      price: 16.0,
    },
    {
      id: "meal3",
      title: "Barbecue Burger",
      amount: 1,
      price: 12.99,
    },
    {
      id: "meal4",
      title: "Green Bowl",
      amount: 1,
      price: 19.99,
    },
  ];
  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.amount}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount price={200.5034} onClose={() => {}} onOrder={() => {}} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;
const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
