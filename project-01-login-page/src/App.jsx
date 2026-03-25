import styled, {
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider,
} from "styled-components";
import logoImg from "./assets/codeit.png";
import kakaoIcon from "./assets/kakao.svg";
import spinnerIcon from "./assets/spinner.svg";

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const Contains = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
`;

const TitleContains = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 200px;
`;

const SignUpNotice = styled.h3`
  color: #848187;
  font-weight: 500;

  & a {
    color: #6500c3;
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 400px;
  border: none;
  display: block;
  outline: none;
  padding: 8px 0;
  border-bottom: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  &:focus {
    border-bottom: 2px solid ${({ error }) => (error ? `#f44336` : `#7760b4`)};
  }

  &::placeholder {
    color: #c4c5cd;
  }
`;

const Label = styled.label`
  color: #e1c6f7;
`;

const ButtonContains = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const borderRadius = css`
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
`;

function BaseButton({ loading, children, className, ...props }) {
  return (
    <button {...props} className={className}>
      {loading ? <SpinnerIcon src={spinnerIcon} alt="로딩 중" /> : children}
    </button>
  );
}

const SpinnerLoad = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.img`
  width: 17.5px;
  height: 17.5px;
  animation: ${SpinnerLoad} 0.5s linear infinite;
`;

const LoginButton = styled(BaseButton)`
  width: 100%;
  background-color: #6500c3;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  ${borderRadius}

  &:hover,
  &:active {
    background-color: #7760b4;
  }

  &:disabled {
    cursor: wait;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const KakaoButton = styled(LoginButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }

  &:hover {
    background-color: #fee500;
  }
`;

const THEMES = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#03040c",
    color: "#ffffff",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={THEMES.light}>
        <GlobalStyled />
        <Contains>
          <TitleContains>
            <Img src={logoImg} alt="로고" />
            <SignUpNotice>
              회원이 아니신가요? <a href="/">회원가입 하기</a>
            </SignUpNotice>
          </TitleContains>
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" placeholder="styled@codeit.kr" error />
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" placeholder="비밀번호" />
          <ButtonContains>
            <LoginButton>로그인 하기</LoginButton>
            <KakaoButton>
              <Icon src={kakaoIcon} alt="카카로 로그인 아이콘" />
              카카오 로그인
            </KakaoButton>
          </ButtonContains>
        </Contains>
      </ThemeProvider>
    </>
  );
}

export default App;
