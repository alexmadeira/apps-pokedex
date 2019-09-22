import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/Api';
import { getLocalStorage } from '~/services/LocalStorage';

import LoadImage from '~/assets/img/pokeball-loading.gif';

import {
  Container,
  PokeName,
  ImageBox,
  PokeId,
  LoadingImage,
  PokemonImage,
} from './styles';

function Card({ name }) {
  const [Pokemon, setPokemon] = useState(null);
  const [PokemonLoadImage, setPokemonLoadImage] = useState(false);
  const [Catch, setCatch] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const respose = await api.get(`pokemon/${name}`);
      setPokemon(respose.data);
    };
    getPokemon();
  }, [name]);

  useEffect(() => {
    if (Pokemon) {
      const IsCatch = getLocalStorage(
        `@alex-madeira-pokedex/CATCH/${Pokemon.name}`
      );
      setCatch(!!IsCatch);
    }
  }, [Pokemon]);
  return (
    <>
      {Pokemon && (
        <Container to={`/pokemon/${Pokemon.name}`} className={Catch && 'catch'}>
          <PokeName>{Pokemon.name}</PokeName>

          <ImageBox>
            <PokeId>#{`00${Pokemon.id}`.slice(-3)}</PokeId>

            <LoadingImage
              src={LoadImage}
              alt={Pokemon.name}
              className={PokemonLoadImage && 'load'}
            />

            <PokemonImage
              onLoad={() => setPokemonLoadImage(true)}
              src={Pokemon.sprites.front_default}
              alt=""
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
