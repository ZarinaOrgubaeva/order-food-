import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Basket-icon.svg";
const BasketBtn = ({ count}) => {
  return (
    <StyledButton>
      <BasketIcon />
      <StyledSpan>Your Card </StyledSpan>
      <StyledCount id="counter">{count || 0}</StyledCount>
    </StyledButton>
  );
};
export default BasketBtn;
//style
const StyledButton = styled.button`
  background: #5a1f08;
  border-radius: 30px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2c0d00;
  }
  &:hover > #counter {
    background-color: #a73a0b;
  }


`;
const StyledSpan = styled.span`
  margin-left: 12px;
  margin-right: 12px;
`;
const StyledCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  padding: 4px 20px;
  cursor: pointer;
`;
