import React, { useContext, useEffect } from 'react'
import bookContext from '../Context/bookContext'
import { useNavigate } from 'react-router-dom';
import Books from './Books';

const Home = () => {
  const navigate = useNavigate();
  const {user,getBooks} = useContext(bookContext);
  useEffect(()=>{
    if(!user) {
      navigate('/login')
    } 
    else {
      getBooks();
    }
    // eslint-disable-next-line
  },[])
  return (
    <div id='homeMainDiv' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Books/>
    </div>
  )
}

export default Home
