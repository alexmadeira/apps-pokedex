import React, { useState, useEffect } from 'react';

import { getLocalStorage } from '~/services/localStorage';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Card from '~/components/Card';

export default function Catch() {
  const [Catches, setCatches] = useState([]);

  useEffect(() => {
    const CatchList = getLocalStorage('@alex-madeira-pokedex/CATCHS');
    setCatches(CatchList);
  }, []);

  return (
    <>
      <Nav titlePage="Catchs" search />
      <Container>
        {Catches.map(({ name }) => (
          <Card key={name} name={name} />
        ))}
      </Container>
    </>
  );
}
