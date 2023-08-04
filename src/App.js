import logo from './logo.svg';
import './App.css';
import Navbar from './Elements/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Elements/Login';
import Home from './Elements/Home';
import Signup from './Elements/Signup';
import { ToastProvider } from 'react-toast-notifications';
import About from './Elements/About';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <ToastProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      </ToastProvider>
    </div>
  );
}

export default App;
