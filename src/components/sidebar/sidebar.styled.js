import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.body};
  height: 100vh;
  width: 40px;

  @media screen and (min-width: 992px) {
    width: 210px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 26px 10px;
`;

export const Logo = styled.img`
 width: 120px;
`;

export const Menu = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li``;
