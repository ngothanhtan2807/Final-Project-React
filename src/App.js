import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'Container/Dashboard';
import { LayoutAdmin } from 'Container/Admin/Layout';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/admin' element={<LayoutAdmin/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
