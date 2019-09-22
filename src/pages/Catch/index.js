import React, { useState, useEffect } from 'react';

import { getLocalStorage } from '~/services/localStorage';
import { PokemonsProvider } from '~/contexts/PokemonsContext';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Card from '~/components/Card';

export default function Catch() {
  const [catches, setCatches] = useState([]);

  const [catchesFullLists, setPokemonsFullList] = useState([]);

  useEffect(() => {
    const CatchList = getLocalStorage('@alex-madeira-pokedex/CATCHS');
    setCatches(CatchList);
    setPokemonsFullList(CatchList);
  }, []);

  return (
    <PokemonsProvider
      value={{
        pokemonsFullList: catchesFullLists,
        setPokemonsList: setCatches,
      }}
    >
      <Nav titlePage="Catchs" search />
      {catches && (
        <Container>
          {catches.map(({ name }) => (
            <Card key={name} name={name} />
          ))}
        </Container>
      )}
    </PokemonsProvider>
  );
}
