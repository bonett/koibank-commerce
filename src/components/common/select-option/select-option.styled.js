import styled from "styled-components";

export const SelectField = styled.select`
  background-color: ${({ theme }) => theme.bgMain};
  border: 1px solid #eaeaea;
  box-shadow: none;
  padding: 12px 14px;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  margin: 0 20px;
  margin-left: 0;

  option {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const FormControl = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:  0 10px;
`;

export const Label = styled.label`
  font-size: 0.8em;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.textColor};
`;
