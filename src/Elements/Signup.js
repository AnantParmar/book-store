import react, { useState } from 'react';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme'
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { ThemeProvider } from '@mui/material/styles';
function Copyright(props) {
  return (
    <Typography sx={{marginTop: "20px", position:'absolute', bottom:"20px"}} variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BookStore
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const validationSchema = Yup.object({
  firstName: Yup
    .string('Enter your First Name')
    .min(2, 'Too Short')
    .required('First Name is required'),
  lastName: Yup
    .string('Enter your Last Name')
    .min(2, 'Too Short')
    .required('Last Name is required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export default function Signup() {
  const {addToast} = useToasts();
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // const { error } = await dataPersistenceLayer(value);
      // setTimeout(()=>{

      //   navigate('/login')
      // },5000)
      
      console.log("redirect..")
      console.log(values)
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        roleid: Math.random()*1000
      }
      axios.post('',payload )
      .then((response)=>{
        addToast('Saved Successfully', { appearance: 'success' });
        navigate('/login')
      })
      .catch((error)=>{
        addToast(error.message, { appearance: 'error' });
      })
    },
  });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     firstName: data.get('firstName'),
  //     lastName: data.get('lastName'),
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
      boxShadow: '3',
      width: '75%',
      height: '500px',
      position: 'relative'
    }}
    maxWidth="md">
      <Typography component="h1" variant="h4" sx={{position: 'absolute',top: '10px'}}>
            Register Here 
      </Typography>
      <form onSubmit={formik.handleSubmit} 
      sx={{
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
      }}
      >
      <TextField
        fullWidth
        sx={{marginTop: "20px"}}
        id="firstName"
        name="firstName"
        label="FirstName*"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        fullWidth
        sx={{marginTop: "20px"}}
        id="lastName"
        name="lastName"
        label="LastName*"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        fullWidth
        sx={{marginTop: "20px"}}
        id="email"
        name="email"
        label="Email*"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        sx={{marginTop: "20px"}}
        id="password"
        name="password"
        label="Password*"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button sx={{marginTop: "20px"}} color="secondary" variant="contained" type="submit">
        Submit
      </Button>
      </form>
      <Copyright/>
    </Container>
    </ThemeProvider>
  );
}