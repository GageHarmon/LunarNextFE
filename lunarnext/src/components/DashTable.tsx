import React from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { useState } from 'react';

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Priority',
    accessor: 'priority',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
];

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  
  const onChange = (e) => {
    setValue(e.target.value);
    setGlobalFilter(e.target.value || undefined);
  };
  
  return (
    <input
      value={value || ''}
      onChange={onChange}
      placeholder="Search tickets..."
    />
  );
}

const DashTable: React.FC<{ data: any[] }> = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  return (
    <div>
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',
                    padding: '10px',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => console.log('Ticket row clicked: ', row.original.id)}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      borderBottom: '1px solid black',
                      borderRight: '1px solid black',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashTable;
