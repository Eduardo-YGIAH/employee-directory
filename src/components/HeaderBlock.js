import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HeaderBlock = () => (
  <Header as='h2' block icon textAlign='center'>
    <Icon name='users' circular />
    <Header.Content>Employees Directory</Header.Content>
  </Header>
);

export default HeaderBlock;
