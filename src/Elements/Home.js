import React, { useContext, useEffect } from 'react'
import bookContext from '../Context/bookContext'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const {user} = useContext(bookContext);
  useEffect(()=>{
    if(!user) {
      navigate('/login')
    } 
    // eslint-disable-next-line
  },[])
  return (
    <div>
      Home
    </div>
  )
}

export default Home
