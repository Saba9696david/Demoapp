import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Container from './Components/Container/Container';
import DummyPage from './Components/DummyPage/DummyPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Container />}/>
         <Route path='/dummy' element={<DummyPage />}/>
      </Routes>
   </div>
 )
  
}
