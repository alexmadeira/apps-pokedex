import styled, { keyframes } from 'styled-components';

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
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: relative;
  padding: 0 20px;
  &.active {
    opacity: 1;
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

export const A = styled.a`
  color: #ffffff;
  ${ListItem}.active & {
    color: #44a9fe;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000, 2px 2px #000;
  }
`;

export const Logo = styled.a`
  background: url(${logo}) 0 0 / cover;
  display: block;
  height: 50px;
  width: 50px;
  animation: ${logoPokeball} 1s steps(27) infinite;
`;
