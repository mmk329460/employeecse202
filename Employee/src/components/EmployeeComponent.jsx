import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService.js'
import { useNavigate,useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName,setFirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [email,setemail]=useState("")

  const {id}=useParams();

  useEffect(() =>{
      if(id){
        getEmployee(id).then((response) => {
          setFirstName(response.data.firstName);
          setlastName(response.data.lastName);
          setemail(response.data.email);
        }).catch(error =>{
          console.error(error);
        })
      }
  },[id])

  const [error,setError]=useState({
    firstName:" ",
    lastName:" ",
    email:" "
  })

  const navigator=useNavigate();

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setlastName(e.target.value)
  }

  function handleEmail(e){
    setemail(e.target.value)
  }

  function saveOrUpdateEmployee(e){
  e.preventDefault();

  if(validateForm()){
    const employee={firstName,lastName,email}
    console.log(employee)

    if(id){
      updateEmployee(id,employee)
        .then((response)=>{
          console.log(response.data);
          navigator('/employee');
        })
        .catch(error => {
          console.error(error);
        });
    }else{
      createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigator('/employee');
        })
        .catch(error =>{
          console.error(error);
        });
    }
  }
}


function validateForm(){
  let valid=true;
  const errorCopy={... error}

  if(firstName.trim()){
    errorCopy.firstName=" ";
  }else{
    errorCopy.firstName='First name is required';
    valid=false;
  }

  if(lastName.trim()){
    errorCopy.lastName=" ";
  }else{
    errorCopy.lastName=' Last name is required';
    valid=false;
  }

  
  if(email.trim()){
    errorCopy.email=" ";
  }else{
    errorCopy.email=' Email is required';
    valid=false;
  }

  setError(errorCopy);
  return valid;
}


function pageTitle(){
  if(id){
    return  <h2 id="titlel" className='text-center'>Udate Employee</h2>
  }else{
    return <h2  id="title" className='text-center'>Add Employee</h2>
  }
}

  return (
    <div className='container'>
      <br /> <br /> <br />
      <div className='row'>
        <div className='card  custom-card col-md-6 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div  className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input className={`form-control ${error.firstName ? 'is-invalid': ''}`} type="text" placeholder='Enter Employee First Name' name='First Name' value={firstName}  onChange={handleFirstName} />

                {error.firstName && <div className='invalid-feedback'>{error.firstName} </div>}

              </div>


              <div  className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input className={`form-control ${error.lastName ? 'is-invalid': ''}`} type="text" placeholder='Enter Employee Last Name' name='last Name' value={lastName}  onChange={handleLastName} />

                {error.lastName && <div className='invalid-feedback'>{error.lastName} </div>}
              </div>  


              <div  className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input className={`form-control ${error.email ? 'is-invalid': ''}`} type="email" placeholder='Enter Employee Email' name='email' value={email}  onChange={handleEmail} />

                {error.email && <div className='invalid-feedback'>{error.email} </div>}
              </div>

              <button className='btn btn-success custom-btn ' onClick={saveOrUpdateEmployee}>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
