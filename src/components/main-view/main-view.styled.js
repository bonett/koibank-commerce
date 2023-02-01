import styled from "styled-components";

export const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
  height: 100vh;
  transition: all 0.1s ease;
  min-width: 860px;
  overflow-y: scroll;
  padding: 0 20px;

  @media screen and (min-width: 992px) {
    width: calc(100vw - 210px);
  }
`;