import React, {useEffect, useState} from 'react'
import { deletEmployee, listEmployee } from '../service/EmployeeService.js'
import { useNavigate } from 'react-router-dom'


const ListEmployeeComponent = () => {

 const [employee,setEmployee] =useState([])
 const navigator=useNavigate();

 useEffect(() =>{
  getAllEmployee();
 }, [])

 function getAllEmployee(){
  listEmployee().then((Response) =>{
    setEmployee(Response.data);
  }).catch(error => {
    console.error(error);
  });
 }

 function addNewEmployee(){
    navigator('/add-employee')
 }

 function updateEmployee(id){
  navigator(`/edit-employee/${id}`)   
 }

 function removeEmployee(id){
  console.log(id);

  deletEmployee(id).then((Response) =>{
   getAllEmployee();
  }).catch(error =>{
   console.error(error);
  })
 }

 return (
  <div className='container'>

    <video autoPlay loop muted playsInline className="video-bg">
      <source src="/video.mp4" type="video/mp4" />
    </video>

     <div className="overlay"></div>

      

    <h2 id='A' className='text-center'>List of Employees</h2>

    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>
      Add Employee
    </button>

    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {
          employee.map(emp =>
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <button 
                  className='btn btn-info'
                  onClick={()=> updateEmployee(emp.id)}
                >
                  Update
                </button>
                <button className='btn btn-danger'  style={{marginLeft:'10px'}} onClick={() => removeEmployee(emp.id)}>Delete</button>

              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
 )
}

export default ListEmployeeComponent