import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const ErrorModal = () => (
  <Modal basic size='small'>
    <Header icon='ban' content='Bad Request' />
    <Modal.Content>
      <p>You seem to be going to the unknown! Better go back.</p>
    </Modal.Content>
    <Modal.Actions>
      <Link to={'/'}>
        <Button color='orange' inverted>
          <Icon name='arrow alternate circle left outline' /> Back to Directory
        </Button>
      </Link>
    </Modal.Actions>
  </Modal>
);

export default ErrorModal;
