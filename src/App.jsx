import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componants/home'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Error from './componants/error'
import Men from './componants/men'
import Women from './componants/woemn'
import Kids from './componants/kids'
import Living from './componants/livings'
import Beauty from './componants/beauty'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/men' element={<Men></Men>}></Route>
      <Route path="/women" element={<Women></Women>}></Route>
      <Route path='/kids' element={<Kids></Kids>}></Route>
      <Route path='/living' element={<Living></Living>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      <Route path='/beauty' element={<Beauty></Beauty>}></Route>
      

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
