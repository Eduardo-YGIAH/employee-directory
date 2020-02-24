import React from 'react';
import CardUser from './CardUser';
import ErrorModal from './ErrorModal';

const UserDetails = props => {
  let employee = props.employees.find(employee => props.match.params.id === employee.id);

  if (!employee) {
    return <ErrorModal />;
  } else {
    return (
      <>
        <div className='ui container centered grid' style={{ marginTop: '10px' }}>
          <CardUser
            firstName={employee.firstName}
            lastName={employee.lastName}
            jobTitle={employee.jobTitle}
            avatar={employee.avatar}
            startingDate={employee.startingDate}
            score={employee.score}
            salary={employee.salary}
            id={employee.id}
            address={employee.address}
            phone={employee.phone}
            email={employee.email}
          />
        </div>
      </>
    );
  }
};

export default UserDetails;
