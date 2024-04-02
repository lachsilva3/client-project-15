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

const ShopCss =styled.div`

.products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
 
}
.product {
  border: 1px solid gray;
 border-radius:15px;
  width: 240px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product img {
  width: 237px;
  height: 300px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.product .description {
  text-align: center;
  font-size: 14px;
}

.product:hover {
  transition: 0.3s ease-in;
  cursor: pointer;
}

.addToCartBttn {
  background-color: transparent;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  margin-top: -10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
}

.addToCartBttn:hover {
  background-color: rgb(19, 19, 19);
  color: white;
  cursor: pointer;
}

  `
    export { ShopCss };
  