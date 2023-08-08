import React, { useContext,useEffect } from 'react'
import bookContext from '../Context/bookContext'
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';
const Cart = () => {
    const {cart,user} = useContext(bookContext)
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user) {
          navigate('/login')
        } 
        // eslint-disable-next-line
      },[]) 
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexGrow: 1, marginTop: '30px', marginBottom: '50px', marginLeft:'10px', marginRight: '10px', width: '100%'}}>
        <Typography variant='h2' sx={{width:'100%',backgroundColor: theme.palette.secondary.light, textAlign: 'center', margin: '10px', borderRadius: '10px'}}>Cart</Typography>
        <Grid container spacing={2} sx={{textAlign: 'center'}}>
                {cart.length===0?<Typography variant='h4' sx={{width:'100%', textAlign: 'center',margin: '10px'}}>Nothing To Show</Typography>:cart.map((item)=>{
                    return <CartItem cartItem={item} key={item.id} />
                })}
        </Grid>
    </Container>
  )
}

export default Cart
