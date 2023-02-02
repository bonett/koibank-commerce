import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse !important;
  width: 100%;
  margin-bottom: 20px;

  & td {
    background-color: ${({ theme }) => theme.body} !important;
    font-size: 0.8em;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    font-weight: 300 !important;
  }

  & th {
    background-color: ${({ theme }) => theme.primaryColor} !important;
    opacity: 0.8;
    position: relative;
    z-index: 2;

    span {
      font-size: 0.9em;
      text-align: center;
      color: ${({ theme }) => theme.body} !important;
      font-weight: 800 !important;
      position: relative;
      z-index: 3;
    }
    button {
      font-size: 0.9em;
      text-align: center;
      color: ${({ theme }) => theme.body} !important;
      font-weight: 800 !important;
      position: relative;
      z-index: 3;
    }
  }

  & thead tr th,
  & tbody tr th,
  & tfoot tr th,
  & thead tr td,
  & tbody tr td,
  & tfoot tr td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  & thead tr th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }

  & tbody + tbody {
    border-top: 2px solid #ddd;
  }

  & col[class*="col-"] {
    position: static;
    display: table-column;
    float: none;
  }
  & td[class*="col-"],
  & th[class*="col-"] {
    position: static;
    display: table-cell;
    float: none;
  }

  & .table-responsive {
    min-height: 0.01%;
    overflow-x: auto;
  }

  @media screen and (max-width: 767px) {
    & .table-responsive {
      width: 100%;
      margin-bottom: 15px;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      border: 1px solid #ddd;
    }

    .table-responsive > .table {
      margin-bottom: 0;
    }

    & .table-responsive thead tr th,
    & .table-responsive tbody tr th,
    & .table-responsive tfoot tr th,
    & .table-responsive thead tr td,
    & .table-responsive tbody tr td,
    & .table-responsive tfoot tr td {
      white-space: nowrap;
    }
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 16px;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 20px;
`;

export const SearchBardWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 20px 20px 0 20px;

  @media screen and (min-width: 992px) {
    justify-content: flex-end;
    padding: 20px 20px 0 20px;
    flex-direction: row;
  }
`;

export const SortButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const NotFound = styled.div`
  padding: 40px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    opacity: 0.5;
    padding: 40px 0;
    text-transform: uppercase;
  }
`;

export const Dropdown = styled.div`
  margin: 6px 0;
  width: 100%;

  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const Search = styled.div`
  margin: 6px 0;
  width: 100%;

  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const TableContent = styled.div`
  overflow-x: scroll;

  @media screen and (min-width: 992px) {
    overflow-x: hidden;
  }
`;
