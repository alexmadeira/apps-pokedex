import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Card from '~/components/Card';

import { Container } from './styles';

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
    <Container>
      {PokemonsList.map(({ name }) => (
        <Card key={name} name={name} />
      ))}
    </Container>
  );
}
