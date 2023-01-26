import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assets/icons/pluzIcon.svg";
import Button from "../../../UI/Button";
export const MealItemForm = ({ id }) => {
  return (
    <StyledForm action="">
      <InputContainer>
        <label htmlFor={id}>Amount</label>
        <StyledInput type="number" id={id} min={1} defaultValue={1} max={5} />
      </InputContainer>
      <Button>
        <PlusIcon id="pluzIcon" />
        Add
      </Button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const InputContainer = styled.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
`;
const StyledInput = styled.input`
  border: 1px solid #d6d6d6;
  width: 60px;
  height: 32px;
  border-radius: 6px;
  margin-left: 20px;
  padding: 4px 12px;
  /* outline: auto; */
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;
