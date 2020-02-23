import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CardUser = props => {
  console.log(props);
  console.log(props.id);

  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={props.avatar} />
          <Card.Header>{props.firstName}</Card.Header>
          <Card.Meta>{props.jobTitle}</Card.Meta>
          <Card.Description>
            Last evaluation scored: <strong>{props.score} points</strong>
            <br></br>
            Started in the company on: <strong>{props.startingDate}</strong>
            <br></br>
            Salary: <strong>{props.salary}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui one buttons'>
            <Link to={`/${props.id}`}>
              <Button basic color='green'>
                View Details
              </Button>
            </Link>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};
export default CardUser;
