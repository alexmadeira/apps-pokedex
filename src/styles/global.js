import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
  letter-spacing: 1px;
}

html,body,#root{
  height:100vh;
}

body{
  text-rendering:optimizeLegibility!important;
  -webkit-font-smoothing: antialiased!important;
  background: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
}

.grass {
    color: #9bcc50; }


.poison {
    color: #b97fc9; }


.fire {
    color: #fd7d24; }


.flying {
    background: linear-gradient(#3dc7ef 10%, #bdb9b8 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }


.water {
    color: #4592c4; }


.bug {
    color: #729f3f; }


.normal {
    color: #a4acaf; }


.electric {
    color: #eed535; }


.ground {
    background: linear-gradient(#f7de3f 30%, #ab9842 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

.fairy {
    color: #fdb9e9; }


.fighting {
    color: #d56723; }


.psychic {
    color: #f366b9; }


.rock {
    color: #a38c21; }


.steel {
    color: #9eb7b8; }


.ice {
    color: #51c4e7; }


.dragon {
    background: -webkit-linear-gradient(#53a4cf 30%, #f16e57 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

.dark {
    color: #707070; }


.ghost {
    color: #7b62a3;
  }

`;
