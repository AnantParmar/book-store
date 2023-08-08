import React, { useState } from 'react'
import BookContext from './bookContext'
import axios from 'axios';
const BookState = (props) => {
    const [user,setUser] = useState("");
    const [cartItem,setCartItem] = useState(0);
    const [cart,setCart] = useState([]);
    const [books,setBooks] = useState([]);
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const getBooks = ()=>{
      const payload = {}
      axios.get('https://book-e-sell-node-api.vercel.app/api/book/all')
      .then((response)=>{
        // console.log(response.data.result)
        setBooks(response.data.result)
      })
    }

  return (
    <BookContext.Provider value={{user,books,cartItem,cart, setUser,getBooks,setCartItem,setCart}}>
        {props.children}
    </BookContext.Provider>
  );
};

export default BookState
