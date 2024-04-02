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
    border: 2px solid black;
    text-align: center;
  }
  th, td {
    padding: 5px;
    text-align: center;
    border-right: 1px solid black ;
  }
  th {
    background-color: black;
    color: white;
    border-right: 1px solid white ;
  }
  button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
   
  }
  .edit {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
  .edit:hover{
    background-color: black;
    color: white;
  }
  .delete {
    margin-left: 2px;
    border: 1px solid black;
    background-color: white;
    color: black;
  }
  .delete:hover{
    background-color: black;
    color: white;
  }

.submit{
  border: 2px solid black;
  background-color: blue;
  color: white;
}

p{
  display: inline-block;
  color: black;
  font-family: sans-serif;
  font-size: 20px;
  margin-left: 10px;
}

input{   
  margin:10px 5px;
}
  `
    export {  TableCss };