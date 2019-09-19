import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, List, ListItem, A } from './styles';

function Nav() {
  return (
    <Container>
      <Logo to="/" />
      <List>
        <ListItem className="active">
          <Link to="/">
            <A>
              <i className="fas fa-globe-americas" />
            </A>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/catch">
            <A>
              <i className="fas fa-suitcase" />
            </A>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}

export default Nav;
