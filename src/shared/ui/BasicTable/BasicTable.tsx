import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import { memo } from 'react';

interface Column {
  key: string;
  label: string | JSX.Element;
}

interface RowData {
  [key: string]: string | number | JSX.Element | undefined;
}

interface BasicTableProps {
  rows: any[];
  columns: Column[];
}

const BasicTable = memo(({ rows, columns }: BasicTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.key === 'link' ? (
                    <Link to={`/individual-edit/${row.id}`}>
                      <OpenInNewIcon />
                    </Link>
                  ) : (
                    row[column.key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default BasicTable;
