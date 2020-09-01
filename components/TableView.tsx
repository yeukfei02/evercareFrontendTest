import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Users {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  title: string;
  picture: string;
}

function TableView(props: any): JSX.Element {
  const classes = useStyles();

  const handleDeleteUser = async (id: string) => {
    if (id) {
      await deleteUserById(id);
    }
  };

  const deleteUserById = async (id: string) => {
    const response = await fetch(`/api/users/${id}`);
    if (response) {
      const responseJSON = await response.json();
      console.log('responseJSON = ', responseJSON);

      if (responseJSON.result) {
        props.getUsersList();
      }
    }
  };

  const renderTableData = (usersList: Users[]) => {
    let tableData = null;

    if (usersList) {
      tableData = usersList.map((item: Users, i: number) => {
        const name = `${item.firstName} ${item.lastName}`;

        return (
          <TableRow key={i}>
            <TableCell align="center">
              <img src={item.picture} alt="" />
            </TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{item.title}</TableCell>
            <TableCell align="center">{item.email}</TableCell>
            <TableCell align="center">
              <Button variant="outlined" color="secondary" onClick={() => handleDeleteUser(item.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    }

    return tableData;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <div style={{ fontWeight: 'bold' }}>Picture</div>
            </TableCell>
            <TableCell align="center">
              <div style={{ fontWeight: 'bold' }}>Name</div>
            </TableCell>
            <TableCell align="center">
              <div style={{ fontWeight: 'bold' }}>Title</div>
            </TableCell>
            <TableCell align="center">
              <div style={{ fontWeight: 'bold' }}>Email</div>
            </TableCell>
            <TableCell align="center">
              <div style={{ fontWeight: 'bold' }}>Action</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableData(props.usersList)}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableView;
