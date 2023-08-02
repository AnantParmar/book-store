import logo from './logo.svg';
import './App.css';
import Navbar from './Elements/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Elements/Login';
import Home from './Elements/Home';
import Signup from './Elements/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
