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

const CssCart =styled.div`
.cart {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

}

.cartItem {
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 10px;
}

.cartItem img {
  border-radius: 15px;
}

.cartItem .description {
  width: 100%;
  font-size: 13px;
  text-align: center;
  margin-top: 10%;
}

.countHandler input {
  width: 20px;
  height: 20px;
  text-align: center;
  
}
.countHandler button{
  background-color:transparent;
  color: black;
  border: none;

}
.checkout button {
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
}

  `
    export { CssCart };