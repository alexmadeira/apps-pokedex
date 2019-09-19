import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import LoadImage from '~/assets/img/pokeball-loading.gif';

import { Container, PokeName, ImageBox, PokeId, PokemonImage } from './styles';

function Card({ name }) {
  const [Pokemon, setPokemon] = useState(null);
  const [PokemonLoadImage, setPokemonLoadImage] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const respose = await api.get(`pokemon/${name}`);
      setPokemon(respose.data);
    };
    getPokemon();
  }, [name]);

  return (
    <>
      {Pokemon && (
        <Container to={`/pokemon/${Pokemon.name}`}>
          <PokeName>{Pokemon.name}</PokeName>

          <ImageBox>
            <PokeId>#{`00${Pokemon.id}`.slice(-3)}</PokeId>
            {!PokemonLoadImage && (
              <PokemonImage src={LoadImage} alt={Pokemon.name} />
            )}

            <PokemonImage
              onLoad={() => setPokemonLoadImage(true)}
              src={Pokemon.sprites.front_default}
              alt={Pokemon.name}
            />
          </ImageBox>
        </Container>
      )}
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
