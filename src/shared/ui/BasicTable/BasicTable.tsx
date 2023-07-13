import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface RowData {
  name: string;
  calories: string;
  fat: string;
  carbs: string;
  protein?: string;
}

const BasicTable = ({ rows, call1, call2, call3, call4, call5 }:
  { rows: RowData[]; call1: string; call2: string, call3: string, call4: string, call5?: string }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{call1}</TableCell>
            <TableCell>{call2}</TableCell>
            <TableCell>{call3}</TableCell>
            <TableCell>{call4}</TableCell>
            <TableCell>{call5}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: RowData) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;