import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Create from './components/Create';
import Detail from './components/Detail';
import Edit from './components/Edit';
import './index.css';

const App = () => {
  return (
    <div className='container my-3'>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App