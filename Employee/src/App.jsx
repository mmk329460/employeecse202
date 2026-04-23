import React from 'react'
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/employee' element={<ListEmployeeComponent/>} ></Route>
          <Route path='/add-employee' element={<EmployeeComponent/>} ></Route>
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  )
}

export default App