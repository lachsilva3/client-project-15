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

const  TableCss =styled.div`

table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border-right: 1px solid ;
  }
  th {
    background-color: black;
    color: white;
  }
  button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
   
  }
  
  .edit {
    border: 2px solid black;
    background-color: green;
    color: white;
  }
  .delete {
    margin-left: 7rem;
    border: 2px solid black;
    background-color: red;
    color: white;
  }

.submit{
  border: 2px solid black;
  background-color: blue;
  color: white;
}



  `
    export {  TableCss };