import {useContext, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import bookContext from '../Context/bookContext';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';
import PaginationUsers from './PaginationUsers';

const Users=()=> {
    const {getUsers,admin,users} =useContext(bookContext)
    const navigate = useNavigate();
    useEffect(()=>{
        if(admin){
            getUsers();
        }
        else
        navigate("/login")
    },[])
  return (
    <TableContainer sx={{marginTop: '10px', marginBottom: '30px'}} component={Paper}>
        <Typography variant='h2' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',width:'95%',backgroundColor: theme.palette.secondary.light, textAlign: 'center', margin: '10px', borderRadius: '10px'}}>
          Users 
        </Typography>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{fontWeight: '900'}}>
            <TableCell sx={{fontWeight: '900'}}>Sr. No</TableCell>
            <TableCell align="center" sx={{fontWeight: '900'}}>Role</TableCell>
            <TableCell align="center" sx={{fontWeight: '900'}}>First Name</TableCell>
            <TableCell align="center" sx={{fontWeight: '900'}}>Last Name</TableCell>
            <TableCell align="center" sx={{fontWeight: '900'}}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users&&users.map((user,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="center">{user.role}</TableCell>
              <TableCell align="center">{user.firstName}</TableCell>
              <TableCell align="center">{user.lastName}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationUsers/>
    </TableContainer>
  );
}

export default Users;