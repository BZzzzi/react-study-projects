import styled, { keyframes } from "styled-components";
import spinnerImg from "./assets/spinner.png";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const SpinnerRotate = keyframes`
      100% {
      transform: rotate(360deg);
    }
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  border: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  border-radius: ${({ round }) => (round ? `9999px` : `4px`)};
  outline: none;
  padding: 16px;
  position: relative;

  ${({ error }) =>
    !error &&
    `
    &:focus {
      border-color: #7760b4;
    }
  `}
`;

const Spinner = styled.div`
  animation: ${SpinnerRotate} 1.5s linear infinite;
  width: 16px;
  height: 16px;
  background-image: url("${spinnerImg}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Container = styled.div`
  width: fit-content;
  position: relative;

  ${Spinner} {
    position: absolute;
    top: calc(50% - 8px);
    right: 20px;
  }
`;

function Input({ loading, ...inputProps }) {
  return (
    <Container>
      <StyledInput {...inputProps} />
      {loading && <Spinner />}
    </Container>
  );
}

export default Input;
