# React Study Projects

각 프로젝트에서 어떤 기술/방식을 사용했는지 간단 정리했습니다.

## 1) project-01-login-page

- React + Vite 기반 로그인 페이지
- styled-components 사용
- ThemeProvider로 dark/light 테마 전환 적용
- 재사용 가능한 버튼 컴포넌트(BaseButton)와 로딩 스피너 구현

## 2) project-02-dicegame

- React + Vite 기반 주사위 게임
- CSS Modules(`*.module.css`) 사용
- `useState`로 게임 상태(기록, 현재 주사위 값) 관리
- 컴포넌트 분리(`Board`, `Button`, `Dice`)로 UI 구성

## 3) project-03-rock-paper-scissors

- React + Vite 기반 가위바위보 게임
- CSS Modules 사용
- `useState`로 점수/히스토리 상태 관리
- 유틸 함수(`utils.js`)로 게임 로직(랜덤 패 선택, 승패 판정) 분리

## 4) project-04-foodit

- React + Vite 기반 음식 데이터 CRUD 페이지
- Axios로 API 통신
- `useEffect` + 상태값으로 정렬/검색/페이지네이션(커서) 처리
- 공통 컴포넌트 구조(`components/common`)와 모달 폼 사용
- Context + 커스텀 훅(`LocaleContext`, `useTranslate`)으로 다국어 처리

## 5) project-05-moviepedia

- React + Vite 기반 영화 리뷰 CRUD 페이지
- Axios로 API 통신
- `useEffect`, `useCallback`으로 목록 로딩/정렬/더보기 처리
- 모달 + 폼(`ReviewForm`)으로 리뷰 생성/수정
- Context + 커스텀 훅으로 다국어 처리
