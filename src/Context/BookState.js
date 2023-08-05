import React, { useState } from 'react'
import BookContext from './bookContext'
const BookState = (props) => {
    const [user,setUser] = useState("");
  return (
    <BookContext.Provider value={{user, setUser}}>
        {props.children}
    </BookContext.Provider>
  );
};

export default BookState
