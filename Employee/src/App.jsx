import React from 'react'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './component/EmployeeComponent'

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