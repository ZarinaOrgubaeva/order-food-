import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
export const Basket = ({ onClose }) => {
  const { items, updateBasketItem, deleteBasketItem} = useContext(BasketContext);
  const counterPluz = (id, amount) => {
    updateBasketItem({ amount: amount + 1, id });
  };
  const counterMinus = (id, amount) => {
    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id });
    }else{
      deleteBasketItem(id)
    }
    
  };
  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };
  return (
    <Modal>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  counterPluz={() => counterPluz(item._id, item.amount)}
                  counterMinus={() => counterMinus(item._id, item.amount)}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
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
