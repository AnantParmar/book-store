import React, { useContext, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import bookContext from '../Context/bookContext';
const CartItem = (props) => {
    const {cartItem} = props
    const {cart, setCart} = useContext(bookContext)
    // console.log(book);
    const removeFromCart = (e)=> {
        console.log(e.target)
        setCart((cart)=>cart.filter((item)=> item != cartItem))
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      useEffect(()=>{
        document.getElementById(`${cartItem.id}-cartButton`).addEventListener('click',removeFromCart)
      },[cart])
  return (
    <Grid item xs={12} sm={4} key={cartItem.id}>
        <Item sx={{display:'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', width:'100%', boxShadow: '2'}}>
            <Typography sx={{backgroundColor: '#9ED2BE', marginBottom:'5px', padding: '10px', fontSize:'1.2rem', width:'100%', fontWeight: '700', color: '#557A46', fontVariant:'petite-caps'}}>{cartItem.name}</Typography>
            <Box sx={{width: '100%',height: 'fit-content', backgroundColor: '#7EAA92', padding: '20px'}}>
                <img style={{width: '80%', aspectRatio: '1/1', borderRadius: '5px'}} src={cartItem.base64image}/>
            </Box>
            <Box sx={{backgroundColor: '#9ED2BE',margin: '10px', width: '100%',padding: '10px'}}>
                <Button variant='text' sx={{fontSize: '1.1rem'}}>Price : {cartItem.price}$</Button>
                <Button id={`${cartItem.id}-cartButton`} variant='outlined'>Remove</Button>
            </Box>
        </Item>
    </Grid>
  )
}

export default CartItem
