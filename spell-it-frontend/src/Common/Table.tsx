import { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
                    <TableCell align="left">Practice</TableCell>
                    <TableCell align="left">Update</TableCell>
                    <TableCell align="left">Delete</TableCell>
                    <TableCell align="left">Word List Id</TableCell>
                    <TableCell align="left">Word List Name</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {(this.props as any).rows.map((row: any) => (
                    <TableRow>
                    <TableCell component="th" scope="row" align="left">
                        <FactCheckOutlinedIcon
                            onClick={() => (this.props as any).onWordListClickPractice(row.wordListId)}
                            key={row.wordListId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}/>
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                        <ModeEditOutlineOutlinedIcon
                            onClick={() => (this.props as any).onWordListClickUpdate(row.wordListId)}
                            key={row.wordListId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}/>
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                        <DeleteOutlineOutlinedIcon
                            onClick={() => (this.props as any).onWordListClickDelete(row.wordListId)}
                            key={row.wordListId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}/>
                    </TableCell>
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