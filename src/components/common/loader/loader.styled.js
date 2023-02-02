import styled from "styled-components";

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 240px;
  height: 300px;
  justify-content: center;
  width: 100%;
  text-align: center;

  h3 {
    font-size:0.8em;
    color: ${({ theme }) => theme.textColor};
    opacity: 0.6l
  }
`;
