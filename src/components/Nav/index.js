import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
  Container,
  Logo,
  List,
  ListItem,
  Icon,
  Title,
  SearchBox,
} from './styles';

function Nav({ titlePage, search }) {
  return (
    <Container>
      <Logo to="/" />
      <List>
        <ListItem>
          <NavLink exact activeClassName="active" to="/">
            <Icon className="fas fa-globe-americas" />
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink exact activeClassName="active" to="/catch">
            <Icon className="fas fa-suitcase" />
          </NavLink>
        </ListItem>
      </List>
      <Title>{titlePage}</Title>
      <SearchBox>{!!search && <input type="text" />}</SearchBox>
    </Container>
  );
}

Nav.defaultProps = {
  search: true,
};

Nav.propTypes = {
  titlePage: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

export default Nav;
