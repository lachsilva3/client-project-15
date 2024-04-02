import styled,{keyframes} from 'styled-components'
const primaryColor="#284ea7";
const fadeAnimation=keyframes`
  0%{
opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`

const FooterCss =styled.div`

a{
    color: black;
    text-decoration: none;
}
 a:hover{
    text-decoration: underline ;
}


  `
    export { FooterCss };
  