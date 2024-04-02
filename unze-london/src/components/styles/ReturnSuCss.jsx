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

const ReturnSuCss =styled.div`
.sidebar{
  color: black;

}
.sidebar a{
    text-align: center;
text-decoration: none;
display: block;
padding: 10px;
border: 1px solid grey;
font-size: 19px;
color: black;
background-color: #efefef;
}


  `
    export { ReturnSuCss };
  