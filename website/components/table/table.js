import styles from "../../styles/components-styles/table/table.module.scss";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CommonTable(props) {

  const gradientStyle = {
    background: 'linear-gradient(270deg, #32CBD1 0%, #086EF2 100%) 0% 0% no-repeat padding-box',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <TableContainer component={Paper} className={styles["table-container"]}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={gradientStyle} className={styles["headers-container"]}>
            <TableCell align="center" className={styles["table-header"]}>Supported Documents</TableCell>
            <TableCell align="center" className={styles["table-header"]}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.cell1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className={styles["table-right-column"]} align="center">
                {row.cell1}
              </TableCell>
              <TableCell align="left" className={styles["table-left-column"]}>{row.cell2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
