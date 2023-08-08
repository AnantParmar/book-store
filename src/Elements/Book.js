import React, { useContext, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import bookContext from '../Context/bookContext';
import axios from 'axios';
// import {Item}
const Book = (props) => {
    const {bookItem} = props
    const {cart, setCart} = useContext(bookContext)
    // const [quantity, ]
    // console.log(book);
    const addToCart = (e)=> {
        // axios.post('https://book-e-sell-node-api.vercel.app/api/cart')

        console.log(e.target)
        setCart([...cart,bookItem])
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      useEffect(()=>{
        document.getElementById(`${bookItem.id}-cartButton`).addEventListener('click',addToCart)
      },[])
  return (
    <Grid item xs={12} sm={4} key={bookItem.id}>
        <Item sx={{display:'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', width:'100%', boxShadow: '2'}}>
            <Typography sx={{backgroundColor: '#9ED2BE', marginBottom:'5px', padding: '10px', fontSize:'1.2rem', width:'100%', fontWeight: '700', color: '#557A46', fontVariant:'petite-caps'}}>{bookItem.name}</Typography>
            <Box sx={{width: '100%',height: 'fit-content', backgroundColor: '#7EAA92', padding: '20px'}}>
                <img style={{width: '80%', aspectRatio: '1/1', borderRadius: '5px'}} src={bookItem.base64image}/>
            </Box>
            <Box sx={{backgroundColor: '#9ED2BE',margin: '10px', width: '100%',padding: '10px'}}>
                <Button variant='text' sx={{fontSize: '1.1rem'}}>Price : {bookItem.price}$</Button>
                <Button id={`${bookItem.id}-cartButton`} variant='outlined' onClick={addToCart}>Add To Cart</Button>
            </Box>
        </Item>
    </Grid>
  )
}

export default Book
