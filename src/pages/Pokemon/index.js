import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '~/services/localStorage';

import {
  Container,
  DetailCard,
  PokemonImageBox,
  Icon,
  PokemonImage,
  PokemonId,
  PokrmonTitle,
  PokrmonDescription,
  PoekmonTypes,
  PoekmonType,
  PokemonDetail,
  PokemonInfo,
  Title,
  FeaturesBox,
  Features,
  Feature,
  StatsBox,
  Stats,
  StatsName,
  StatsProgress,
  PokemonSpritesBox,
  PokemonSprite,
} from './styles';

import Nav from '~/components/Nav';

function Pokemon({ match: { params } }) {
  const { slug } = params;
  const [PokemonData, setPokemonData] = useState(null);
  const [Catchs, setCatchs] = useState([]);
  const [Catch, setCatch] = useState(false);
  const [Specie, setSpecie] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const respose = await api.get(`pokemon/${slug}`);
      setPokemonData(respose.data);
    };
    getPokemon();
  }, [slug]);

  useEffect(() => {
    if (PokemonData) {
      const getSpecie = async () => {
        const respose = await api.get(`pokemon-species/${PokemonData.id}`);
        setSpecie(respose.data);
      };
      getSpecie();
    }
  }, [PokemonData]);

  useEffect(() => {
    const StorageCatchs = getLocalStorage('@alex-madeira-pokedex/CATCHS');
    setCatchs(StorageCatchs || []);
  }, [Catch]);

  useEffect(() => {
    if (PokemonData) {
      const CatchThis = getLocalStorage(
        `@alex-madeira-pokedex/CATCH/${PokemonData.name}`
      );
      setCatch(!!CatchThis);
    }
  }, [PokemonData, Catch]);

  function catchPokermon() {
    const localStoreCatchs = {
      name: '@alex-madeira-pokedex/CATCHS',
      value: [...new Set([...Catchs, PokemonData])],
    };

    const localStoreCatch = {
      name: `@alex-madeira-pokedex/CATCH/${PokemonData.name}`,
      value: 'Catch',
    };

    setCatch(true);
    setLocalStorage(localStoreCatchs);
    setLocalStorage(localStoreCatch);
  }

  function dropPokemon() {
    const DropCatch = Catchs.filter(pokemon => {
      return pokemon.name !== PokemonData.name;
    });

    const localStoreCatchs = {
      name: '@alex-madeira-pokedex/CATCHS',
      value: DropCatch,
    };

    setCatch(false);
    setLocalStorage(localStoreCatchs);
    removeLocalStorage(`@alex-madeira-pokedex/CATCH/${PokemonData.name}`);
  }

  function catchOrDropPokermon() {
    if (Catch) {
      dropPokemon();
    } else {
      catchPokermon();
    }
  }

  return (
    <>
      {PokemonData && (
        <>
          <Nav titlePage={PokemonData.name} />
          <Container>
            <PokemonDetail>
              <DetailCard>
                <PokemonImageBox
                  className={Catch && 'active'}
                  onClick={() => catchOrDropPokermon()}
                >
                  <Icon
                    className={`${Catch && 'active'} ${
                      Catch ? 'fas' : 'far'
                    }   fa-star`}
                    onClick={() => {}}
                  />
                  <PokemonImage
                    src={PokemonData.sprites.front_default}
                    alt={PokemonData.name}
                  />
                </PokemonImageBox>
                <PokemonId>#{`00${PokemonData.id}`.slice(-3)}</PokemonId>
                <PokrmonTitle>{PokemonData.name}</PokrmonTitle>

                <PokrmonDescription>
                  {Specie &&
                    Object.values(Specie.flavor_text_entries).pop().flavor_text}
                </PokrmonDescription>

                <PoekmonTypes>
                  {PokemonData.types.map(({ type }) => (
                    <PoekmonType className={type.name} key={type.name}>
                      {type.name}
                    </PoekmonType>
                  ))}
                </PoekmonTypes>
              </DetailCard>
              <PokemonInfo>
                <Title>Detes</Title>
                <FeaturesBox>
                  <Features>
                    <Feature>
                      <strong>Altura</strong>
                      <span>{PokemonData.height / 10} m</span>
                    </Feature>
                    <Feature>
                      <strong>Categoria</strong>
                      {Specie && <span>{Specie.genera[2].genus}</span>}
                    </Feature>
                    <Feature>
                      <strong>Peso</strong>
                      <span>{PokemonData.weight / 10} Kg</span>
                    </Feature>
                    <Feature>
                      <strong>Habilidades</strong>
                      {PokemonData.abilities.map(({ ability }) => (
                        <span key={ability.name}>{ability.name}</span>
                      ))}
                    </Feature>
                  </Features>
                </FeaturesBox>
                <Title>Estatísticas</Title>
                <StatsBox>
                  {PokemonData.stats.map(({ stat, base_stat }) => (
                    <Stats key={stat.name}>
                      <StatsName>{stat.name}</StatsName>

                      <StatsProgress
                        value={base_stat}
                        className={PokemonData.types[0].type.name}
                        stat={base_stat <= 100 ? base_stat : 100}
                      />
                    </Stats>
                  ))}
                </StatsBox>
              </PokemonInfo>
            </PokemonDetail>
            <PokemonSpritesBox>
              <Title>Sprites</Title>
              {Object.values(PokemonData.sprites)
                .filter(sprite => sprite !== null)
                .reverse()
                .map((sprite, index) => (
                  <PokemonSprite src={sprite} alt={index} />
                ))}
            </PokemonSpritesBox>
          </Container>
        </>
      )}
    </>
  );
}

Pokemon.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Pokemon;
