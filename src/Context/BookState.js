import React, { useState } from 'react'
import BookContext from './bookContext'
import axios from 'axios';
const BookState = (props) => {
    const [user,setUser] = useState("");
    const [cartItem,setCartItem] = useState(0);
    const [cart,setCart] = useState([]);
    const [books,setBooks] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [quantity,setQuantity] = useState();
    const [bookId,setBookId] = useState(0);

    const makeAddCartReq = ()=>{
      const payload = {
        "bookId": bookId,
        "userId": user.id,
        "quantity": quantity
      }
      axios.post('https://book-e-sell-node-api.vercel.app/api/cart',payload)
      .then((response)=>{
        console.log(response)
        getCartData()
      })
      .catch((error)=>{
        console.log(error)
      })
      setQuantity(0)
      setBookId(0)
      handleClose()
    }
    const getCartData = ()=>{
      axios.get(`https://book-e-sell-node-api.vercel.app/api/cart?userId=${user.id}` )
      .then((response)=>{

        console.log(response) 
        setCart(response.data.result)
        return response.code
      })
      .catch((error)=>{
        return error.message
      })
    }
    const deleteFromCart = (cartId)=>{
      axios.delete(`https://book-e-sell-node-api.vercel.app/api/cart?id=${cartId}` )
      .then((response)=>{
        console.log(response)
        getCartData()
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    const getBooks = ()=>{
      axios.get('https://book-e-sell-node-api.vercel.app/api/book/all')
      .then((response)=>{
        // console.log(response.data.result)
        setBooks(response.data.result)
      })
    }

  return (
    <BookContext.Provider value={{user,books,cartItem,cart,open,quantity,setQuantity, setUser,getBooks,setCartItem,setCart,setOpen,handleOpen,handleClose,makeAddCartReq,setBookId,getCartData,deleteFromCart}}>
        {props.children}
    </BookContext.Provider>
  );
};

export default BookState
