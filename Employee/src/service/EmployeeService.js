import axios from"axios";


const REST_API_BASE_URL='https://employeecse201.onrender.com/api/employees';


export const listEmployee = () =>{
  return axios.get(REST_API_BASE_URL);
}


//// IN EmployeeService , Write a Code to call Add Employee REST API using axios.

export const createEmployee=(employee) => axios.post(REST_API_BASE_URL,employee);



export const getEmployee=(employeeId)=>axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmployee=(employeeId,employee)=>axios.put(REST_API_BASE_URL+'/' +employeeId,employee);

export const deletEmployee=(employeeId)=>axios.delete(REST_API_BASE_URL + '/' + employeeId);