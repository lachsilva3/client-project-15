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

const TrackOrderFormCss =styled.div`

p{
    color: grey; 
}
.login-container {
    max-width: 500px;
    margin: auto;
    border-radius:5px ;
    background-color: #efefef;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
  }
  .form-control {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-primary {
    background-color: black;
    width: 32%;
    margin: auto;
  }
  `
    export { TrackOrderFormCss };
  