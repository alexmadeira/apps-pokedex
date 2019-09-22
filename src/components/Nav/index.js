import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { clearLocalStorage, getLocalStorage } from '~/services/LocalStorage';
import PokemonsContext from '~/contexts/PokemonsContext';
import history from '~/services/history';

import {
  Container,
  Logo,
  List,
  ListItem,
  RemoveBotton,
  Icon,
  Title,
  SearchBox,
} from './styles';

function Nav({ titlePage, search }) {
  const { pokemonsFullList, setPokemonsList } = useContext(PokemonsContext);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [catches, setCatches] = useState(null);

  useEffect(() => {
    if (pokemonsFullList) {
      const filerPokemonList = pokemonsFullList.filter(({ name }) => {
        return name.includes(searchPokemon);
      });
      setPokemonsList(filerPokemonList);
    }
  }, [pokemonsFullList, searchPokemon, setPokemonsList]);

  useEffect(() => {
    const catchList = getLocalStorage('@alex-madeira-pokedex/CATCHS');
    setCatches(catchList);
  }, []);

  function dropAll() {
    clearLocalStorage();
    history.push('/');
  }

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
        {catches && (
          <ListItem>
            <RemoveBotton onClick={() => dropAll()}>
              <Icon className="fas fa-sign-out-alt" />
            </RemoveBotton>
          </ListItem>
        )}
      </List>
      <Title>{titlePage}</Title>
      <SearchBox>
        {!!search && (
          <input
            value={searchPokemon}
            onChange={e => setSearchPokemon(e.target.value)}
            placeholder="Find your Pokemon!!!"
            type="text"
          />
        )}
      </SearchBox>
    </Container>
  );
}

Nav.defaultProps = {
  search: false,
};

Nav.propTypes = {
  titlePage: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

export default Nav;
