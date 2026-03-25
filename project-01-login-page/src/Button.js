import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
  color: #ffffff;
  padding: 16px;
`;

export default Button;
