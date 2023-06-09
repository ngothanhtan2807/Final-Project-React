import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'Container/Dashboard';
import { LayoutAdmin } from 'Container/Admin/Layout';
import {HomeAdmin} from 'Container/Dashboard/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route exact element={<LayoutAdmin />}>
          <Route path='/admin' element={<HomeAdmin />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
