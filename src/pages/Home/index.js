import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { PokemonsProvider } from '~/contexts/PokemonsContext';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Card from '~/components/Card';

export default function Home() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonsFullList, setPokemonsFullList] = useState([]);

  useEffect(() => {
    const getPokemonsList = async () => {
      const reponse = await api.get(`pokemon/?limit=802R&offset=0`);
      setPokemonsList(reponse.data.results);
      setPokemonsFullList(reponse.data.results);
    };
    getPokemonsList();
  }, []);

  return (
    <PokemonsProvider value={{ pokemonsFullList, setPokemonsList }}>
      <Nav titlePage="Gotta Catch ‘Em All!" search />
      <Container>
        {pokemonsList.map(({ name }) => (
          <Card key={name} name={name} />
        ))}
      </Container>
    </PokemonsProvider>
  );
}
