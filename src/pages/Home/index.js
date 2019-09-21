import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Card from '~/components/Card';

export default function Home() {
  const [PokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    const getPokemonsList = async () => {
      const reponse = await api.get(`pokemon/?limit=802R&offset=0`);
      setPokemonsList(reponse.data.results);
    };
    getPokemonsList();
  }, []);

  return (
    <>
      <Nav titlePage="Gotta Catch ‘Em All!" search />
      <Container>
        {PokemonsList.map(({ name }) => (
          <Card key={name} name={name} />
        ))}
      </Container>
    </>
  );
}
