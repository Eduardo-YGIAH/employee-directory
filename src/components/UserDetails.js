import React from 'react';

const UserDetails = props => {
  console.log(props.match.params.id);
  console.log(props.employees[0].id);
  let employee = props.employees.find(employee => props.match.params.id === employee.id);

  return (
    <>
      <div>User Id: {employee.id}</div>
      <div>First Name: {employee.firstName}</div>
    </>
  );
};

export default UserDetails;
