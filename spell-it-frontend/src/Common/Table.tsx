import * as React from 'react';
import { Component, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default class WordListTable extends Component <any, any> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        console.log(this.props.rows)
        return (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Word Lists">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Word List Id</TableCell>
                    <TableCell align="left">Word List Name</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {(this.props as any).rows.map((row: any) => (
                    <TableRow
                    onClick={() => (this.props as any).onWordListClick(row.wordListId)}
                    key={row.wordListId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" align="left">
                        {row.wordListId}
                    </TableCell>
                    <TableCell align="left">{row.wordListName}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
    }
   
}