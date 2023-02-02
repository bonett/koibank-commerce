import styled from "styled-components";

export const PaginationContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const PaginationButton = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 20px 20px 20px;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    font-size: 0.8em;

    &:disabled {
      color: ${({ theme }) => theme.textColor};
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`;

export const PaginationCurrentPage = styled.div`
 align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 0.8em;
  color: ${({ theme }) => theme.textColor};
  padding: 0 20px 20px 20px;
  opacity: 0.8;
`;

export const PaginationCountPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 0.8em;
  color: ${({ theme }) => theme.textColor};
  padding: 0 20px 20px 20px;
  opacity: 0.8;
`;
