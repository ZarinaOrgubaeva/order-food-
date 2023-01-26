
import styled from "styled-components";

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>
};
const StyledButton = styled.button`
  background: #8a2b06;
  border-radius: 1.25rem;
  padding: 0.625rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  :hover{
    background: #7E2A0A;
  }
  :active{
    background: #993108;
  }
  #pluzIcon{
    margin-right: 12px;
  }
`;
export default Button;
