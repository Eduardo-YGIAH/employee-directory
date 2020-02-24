import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CardUser = props => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={props.avatar} />
          <Card.Header>
            {props.firstName} {props.lastName}
          </Card.Header>
          <Card.Meta>{props.jobTitle}</Card.Meta>
          <Card.Description>
            Last evaluation scored: <strong>{props.score} points</strong>
            <br></br>
            Started in the company on:
            <br></br>
            <strong>{props.startingDate}</strong>
            <br></br>
            Salary: <strong>{props.salary}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            Address:
            <br></br>
            <strong>{props.address}</strong>
            <br></br>
            Phone:
            <strong>{props.phone}</strong>
            <br></br>
            Email:
            <br></br>
            <strong>{props.email}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui one buttons'>
            <Link to={'/'}>
              <Button basic color='green'>
                Back to List
              </Button>
            </Link>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};
export default CardUser;
