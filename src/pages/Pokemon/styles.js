import styled, { keyframes } from 'styled-components';

const progressAnimate = keyframes`
  from {
      width: 0%;
  }
`;
export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const PokemonDetail = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin: 10px;
  max-width: 1200px;
  width: calc(100% - 20px);
  flex-wrap: wrap;
`;

export const DetailCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10px;
  flex: 1;
  min-width: 300px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  margin-bottom: 20px;
`;

export const PokemonImageBox = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  img {
    filter: grayscale(90%);
    transition: all 0.5s;
    opacity: 0.4;
  }
  &.active {
    img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 25px;
  color: #333333;
  opacity: 0.3;

  &:hover:not(.active) {
    opacity: 0.7;
  }

  &.active {
    color: #eed535;
    opacity: 1;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
`;

export const PokemonId = styled.em`
  font-size: 16px;
  margin: 10px 20px 10px 20px;
  color: #747474;
`;

export const PokrmonTitle = styled.h2`
  text-transform: capitalize;
  color: #000;
  font-size: 24px;
  margin: 0px 20px 10px 20px;
`;

export const PokrmonDescription = styled.p`
  text-transform: capitalize;
  color: #4a4a4a;
  font-size: 18px;
  margin: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 2px;
`;

export const PoekmonTypes = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  width: 100%;

  .grass {
    color: #9bcc50;
  }
  .poison {
    color: #b97fc9;
  }
  .fire {
    color: #fd7d24;
  }
  .flying {
    background: linear-gradient(#3dc7ef 10%, #bdb9b8 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .water {
    color: #4592c4;
  }
  .bug {
    color: #729f3f;
  }
  .normal {
    color: #a4acaf;
  }
  .electric {
    color: #eed535;
  }
  .ground {
    background: linear-gradient(#f7de3f 30%, #ab9842 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .fairy {
    color: #fdb9e9;
  }
  .fighting {
    color: #d56723;
  }
  .psychic {
    color: #f366b9;
  }
  .rock {
    color: #a38c21;
  }
  .steel {
    color: #9eb7b8;
  }
  .ice {
    color: #51c4e7;
  }
  .dragon {
    background: -webkit-linear-gradient(#53a4cf 30%, #f16e57 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .dark {
    color: #707070;
  }
  .ghost {
    color: #7b62a3;
  }
`;

export const PoekmonType = styled.li`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  display: flex;
  font-size: 20px;
  text-transform: uppercase;
  &:not(:last-child) {
    border-right: 1px solid #dbdbdb;
  }
`;

export const PokemonInfo = styled.div`
  min-width: 320px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 2;
  margin: 0 10px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;

// export const Title = styled.h3`
//   text-transform: capitalize;
//   color: #000;
//   font-size: 20px;
//   padding: 15px 20px 10px 20px;
//   width: 100%;
//   align-items: stretch;
//   box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
//   display: flex;
// `;

export const FeaturesBox = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #dbdbdb;
`;

export const Features = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  padding: 20px;
`;

export const Feature = styled.li`
  min-width: 50%;
  width: 152px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  strong {
    font-weight: normal;
    color: #7a7a7a;
    margin-bottom: 5px;
  }
  span {
    color: #4a4a4a;
    text-transform: capitalize;
    margin: 2px 0;
    line-height: 24px;
  }
`;

export const StatsBox = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  flex-direction: column;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;

  margin-bottom: 3px;
`;

export const StatsName = styled.p`
  color: #7a7a7a;
  font-size: 20px;
`;

export const StatsProgress = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
  background-color: #dcdcdc;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.stat}%;
    background: #a0a0a0;
    animation: ${progressAnimate} 1s ease;
  }
  &.grass {
    &:after {
      background-color: #9bcc50;
    }
  }

  &.poison {
    &:after {
      background-color: #b97fc9;
    }
  }

  &.fire {
    &:after {
      background-color: #fd7d24;
    }
  }

  &.flying {
    &:after {
      background: linear-gradient(#3dc7ef 10%, #bdb9b8 90%);
    }
  }

  &.water {
    &:after {
      background-color: #4592c4;
    }
  }

  &.bug {
    &:after {
      background-color: #729f3f;
    }
  }

  &.normal {
    &:after {
      background-color: #a4acaf;
    }
  }

  &.electric {
    &:after {
      background-color: #eed535;
    }
  }

  &.ground {
    &:after {
      background: linear-gradient(#f7de3f 30%, #ab9842 70%);
    }
  }

  &.fairy {
    &:after {
      background-color: #fdb9e9;
    }
  }

  &.fighting {
    &:after {
      background-color: #d56723;
    }
  }

  &.psychic {
    &:after {
      background-color: #f366b9;
    }
  }

  &.rock {
    &:after {
      background-color: #a38c21;
    }
  }

  &.steel {
    &:after {
      background-color: #9eb7b8;
    }
  }

  &.ice {
    &:after {
      background-color: #51c4e7;
    }
  }

  &.dragon {
    &:after {
      background: -webkit-linear-gradient(#53a4cf 30%, #f16e57 70%);
    }
  }

  &.dark {
    &:after {
      background-color: #707070;
    }
  }

  &.ghost {
    &:after {
      background-color: #7b62a3;
    }
  }
`;

export const PokemonSpritesBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  flex-wrap: wrap;
  max-width: 1180px;
  width: calc(100% - 40px);
  margin: 10px 20px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;
export const Title = styled.h3`
  text-transform: capitalize;
  color: #000;
  font-size: 20px;
  padding: 15px 20px 10px 20px;
  width: 100%;
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  display: flex;
`;

export const PokemonSprite = styled.img`
  width: 25%;
  min-width: 290px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
