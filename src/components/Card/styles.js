import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  padding: 1.25rem;
  flex: 1;
  border-radius: 5px;
  margin: 10px;
  min-width: 300px;
  max-width: 100%;
  text-decoration: none;

  img {
    filter: grayscale(90%);
  }
  &:hover:not(.catch) {
    img {
      filter: grayscale(50%);
    }
  }
  &.catch {
    img {
      filter: grayscale(0%);
    }
  }
`;

export const PokeName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 10px;
  text-transform: capitalize;
`;

export const ImageBox = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  border-radius: 6px;
  min-height: 280px;
`;

export const LoadingImage = styled.img`
  width: 200px;
  position: absolute;
  transition: all 500ms linear;
  z-index: 2;
  &.load {
    opacity: 0;
  }
`;

export const PokemonImage = styled.img`
  height: auto;
  width: 100%;
`;

export const PokeId = styled.em`
  margin: 20px 0;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;
