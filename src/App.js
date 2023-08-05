import './App.css';
import Navbar from './Elements/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Elements/Login';
import Home from './Elements/Home';
import Signup from './Elements/Signup';
import { ToastContainer } from 'react-toastify';
import About from './Elements/About';
import Contact from './Elements/Contact';
import 'react-toastify/dist/ReactToastify.css';
import BookState from './Context/BookState';
function App() {
  document.getElementById('root').style.fontFamily = "Josefin Sans"
  return (
    <>
      <BookState>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact  path='/login' element={<Login/>}/>
            <Route exact  path='/signup' element={<Signup/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
          <ToastContainer/>
        </BrowserRouter>
      </BookState>
    </>
  );
}

export default App;
