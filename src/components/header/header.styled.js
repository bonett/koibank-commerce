import styled from "styled-components";

export const Header = styled.div`
  background: ${({ theme }) => theme.bgMain};
  position: fixed;
  width: 100%;
  z-index: 4;
`;

export const Wrapper = styled.div`
  margin: 10px 0;
  padding: 14px 20px;
`;

export const Heading = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 2em;
  line-height: 1.4;
  font-weight: 800;
`;

export const SubHeading = styled.div`
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.2;
`;
