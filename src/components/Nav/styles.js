import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/pokemonloader.png';

const logoPokeball = keyframes`
  from {
      background-position: 0 0;

  }
  to {
      background-position: -1350px 0
  }
`;

export const Container = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #dc1d2d;
  padding: 10px 50px;
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style: none;
  justify-content: flex-start;
  margin-left: 20px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: relative;
  padding: 0 20px;
  a {
    opacity: 0.7;
    &.active {
      opacity: 1;
      i {
        color: #44a9fe;
        text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000,
          2px 2px #000;
      }
    }
  }
  &:hover {
    &:not(.active) {
      opacity: 0.9;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    height: 50%;
    width: 1px;
    background: #fff;
  }
  &:last-child {
    &::after {
      background: transparent;
    }
  }
`;

export const Icon = styled.i`
  color: #ffffff;
`;

export const Logo = styled(Link)`
  background: url(${logo}) 0 0 / cover;
  display: block;
  height: 50px;
  width: 50px;
  animation: ${logoPokeball} 1s steps(27) infinite;
`;

export const Title = styled.h1`
  flex: 1;
  color: #fff;
  text-align: center;
`;
export const SearchBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
