import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchUsers = props => {
  return <Input icon='users' iconPosition='left' placeholder='Search by Last Name...' onChange={props.handleInput} />;
};

export default SearchUsers;
