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

  return (
    <div className="container-cards">
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee}/>
      ))}
    </div>
  );
};

export default EmployeeList;
