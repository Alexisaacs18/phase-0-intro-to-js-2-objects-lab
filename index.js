// Write your solution in this file!
const employee = {
    employee: '',
    key: '',
    value: ''
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
  }

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  const employees = {
    name: 'Sam',
    age: 30,
    role: 'Developer'
  };
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }