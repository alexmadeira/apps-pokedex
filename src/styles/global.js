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
  height:100%;
}

body{
  text-rendering:optimizeLegibility!important;
  -webkit-font-smoothing: antialiased!important;
  background: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
}

`;
