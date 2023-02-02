import styled from "styled-components";

export const Sidebar = styled.div`
  background: ${({ theme }) => theme.bgSidebar};
  box-shadow: ${({ theme }) => theme.shadow};
  border-right: 1px solid ${({ theme }) => theme.shadowRight};
  height: 100vh;
  width: 60px;

  @media screen and (min-width: 992px) {
    width: 210px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 26px 0 20px 0;

  @media screen and (min-width: 992px) {
    padding: 26px 0 20px 10px;
  }
`;

export const Logo = styled.img`
  margin: 20px 0 40px 0;

  &.desktop {
    display: none;
  }

  &.mobile {
    display: block;
    width: 20px;
    padding: 0 10px;
  }

  @media screen and (min-width: 992px) {
    &.desktop {
      display: block;
      width: 120px;
      padding-right: 10px;
    }

    &.mobile {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  width: 100%;

  a {
    align-items: center;
    background-color: ${({ theme }) => theme.bgMain};
    box-shadow: ${({ theme }) => theme.shadow};
    color: ${({ theme }) => theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-decoration: none;
    padding: 8px 0;
    border-radius: 20px 0 0 20px;
    width: 90%;

    &.active {
      color: ${({ theme }) => theme.primaryColor};
    }

    span {
      margin-right: 0;
    }

    span.text {
      display: none;
    }

    @media screen and (min-width: 992px) {
      padding: 14px 10px 14px 0;

      span {
        margin-right: 8px;
      }

      span.text {
        display: block;
      }
    }
  }
`;

export const Icon = styled.span``;
