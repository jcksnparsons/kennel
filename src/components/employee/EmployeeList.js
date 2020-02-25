import React, { useEffect, useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      // We'll do something more interesting with this data soon.
      setEmployees(employeesFromAPI);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmployee = id => {
    EmployeeManager.delete(id).then(() => {
      EmployeeManager.getAll().then(setEmployees);
    });
  };

  return (
    <div className="container-cards">
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />
      ))}
    </div>
  );
};

export default EmployeeList;
