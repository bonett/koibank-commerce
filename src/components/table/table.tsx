import React, { useState, useMemo, useEffect } from "react";
import Pagination from "../pagination";
import { sortRows, filterRows, paginateRows } from "../../utils/transform";
import TextField from "../common/text-field";
import { Table, Card, SearchBardWrapper, SortButton, NotFound, Dropdown, Search, TableContent } from "./table.styled";
import SelectOptionField from "../common/select-option";
import { DropdownData } from "../../constants"

const rowsPerPage = 10;

export const TableComponent = ({ columns, rows }: any) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState("");
  const [selectOptions, setSelectOptions] = useState("all");
  const [calculatedRows, setCalculatedRows] = useState([]);
  const [restoreRows, setRestoreRows] = useState([]);
  const [sort, setSort] = useState({ order: "asc", orderBy: "id" });
  const filteredRowsMemo = useMemo(() => filterRows(rows, filters), [
    rows,
    filters
  ]);
  const sortedRows = useMemo(() => sortRows(filteredRowsMemo, sort), [
    filteredRowsMemo,
    sort
  ]);

  const [filteredRows, setFilteredRows] = useState([]);

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handleChangeOptions = (e: any) => {
    const optionSelected = e.target.value;

    setSelectOptions(optionSelected);
  }

  const handleSearch = (value: string) => {
    setActivePage(1);
    setFilters(value);

    if (value.length > 0) {
      const result = rows.filter((item: any) => {
        return (
          item.id.toLowerCase().includes(filters.toLowerCase()) ||
          item.commerce.toLowerCase().includes(filters.toLowerCase()) ||
          item.cuit.toLowerCase().includes(filters.toLowerCase())
        );
      });

      setCalculatedRows(result);
      return;
    }

    setCalculatedRows(restoreRows);
  };

  const handleSort = (accessor: string) => {
    setActivePage(1);
    setSort(prevSort => ({
      order:
        prevSort.order === "asc" && prevSort.orderBy === accessor
          ? "desc"
          : "asc",
      orderBy: accessor
    }));
  };

  useEffect(
    () => {
      if (selectOptions === "all") {
        setCalculatedRows(restoreRows);
        return;
      }

      const booleanSelected = selectOptions === 'active' ? true : false;

      if (filters.length > 0) {
        const result = rows.filter((item: any) => item.active === booleanSelected);
        setCalculatedRows(result);
        return;
      }

      const result = rows.filter((item: any) => item.active === booleanSelected);
      setCalculatedRows(result);
    },
    [selectOptions]
  );

  const buildDataTable = () => {
    setFilteredRows(filteredRowsMemo);

    const rowMemo: any = paginateRows(sortedRows, activePage, rowsPerPage);

    setCalculatedRows(rowMemo);
    setRestoreRows(rowMemo);

  }
  useEffect(
    () => {
      buildDataTable();
    },
    [rows, activePage, sort]
  );

  return (
    <Card>
      <SearchBardWrapper>
        <Dropdown>
          <SelectOptionField
            options={DropdownData}
            name={'search-options'}
            value={selectOptions}
            handleChangeOption={handleChangeOptions}
            label={'Filtrar por:'}
          />
        </Dropdown>
        <Search>
          <TextField
            label={'Buscar por:'}
            type={"search"}
            value={filters}
            placeholderText={"ID, nombre del comercio o CUIT"}
            handleChange={(event: any) => handleSearch(event.target.value)}
          />
        </Search>
      </SearchBardWrapper>
      <TableContent>
      <Table className="table-responsive table">
        <thead>
          <tr>
            {columns.map((column: any) => {
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === "asc") {
                    return "↑";
                  }
                  return "↓";
                } else {
                  return "️↕️";
                }
              };
              return (
                <th key={column.accessor}>
                  <span>
                    {column.commerce}
                  </span>
                  {(column.accessor === "commerce" ||
                    column.accessor === "cuit") &&
                    <SortButton onClick={() => handleSort(column.accessor)}>
                      {sortIcon()}
                    </SortButton>}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <>
            {calculatedRows && calculatedRows.length > 0 && calculatedRows.map((row: any) => {
              return (
                <tr key={row.id}>
                  {columns.map((column: any) => {
                    if (column.format) {
                      return (
                        <td key={column.accessor}>
                          {column.format(row[column.accessor])}
                        </td>
                      );
                    }
                    return (
                      <td key={column.accessor}>
                        {row[column.accessor]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </>
        </tbody>
      </Table>
      </TableContent>

      <>
        {calculatedRows && calculatedRows.length === 0 && (
          <NotFound>
            <h1>No data found</h1>
          </NotFound>
        )}
      </>

      <>
        {
          calculatedRows.length > 0 && (<Pagination
            activePage={activePage}
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            totalPages={totalPages}
            setActivePage={setActivePage}
            totalItems={calculatedRows.length}
          />)
        }
      </>
    </Card>
  );
};

export default TableComponent;
