import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TableSorted from './components/TableSorted';
import HeaderBlock from './components/HeaderBlock';
import UserDetails from './components/UserDetails';
import Faker from 'faker';
import { uuid } from 'uuidv4';

const employees = Array.from({ length: 12 }, v => ({
  avatar: Faker.image.avatar(),
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  jobTitle: Faker.name.jobTitle(),
  email: Faker.internet.email(),
  phone: Faker.phone.phoneNumber(),
  address: Faker.address.streetName(),
  startingDate: Faker.date.between('01/01/2002', '01/01/2020').toDateString(),
  score: Faker.random.number(100),
  salary: Faker.finance.amount(22000, 160000, 2, '£'),
  id: uuid(),
}));

function App() {
  return (
    <>
      <HeaderBlock />
      <div className='ui container'>
        <Router>
          <Switch>
            <Route exact path='/:id' render={props => <UserDetails {...props} employees={employees} />} />
            <Route exact path='/' render={props => <TableSorted {...props} employees={employees} />} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
