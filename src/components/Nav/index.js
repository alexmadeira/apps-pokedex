import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, List, ListItem, Icon } from './styles';

function Nav() {
  return (
    <Container>
      <Logo to="/" />
      <List>
        <ListItem className="active">
          <Link to="/">
            <Icon className="fas fa-globe-americas" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/catch">
            <Icon className="fas fa-suitcase" />
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}

export default Nav;
