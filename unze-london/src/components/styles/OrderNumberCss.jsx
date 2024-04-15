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

const OrderNumberCss =styled.div`

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}



.message {
  margin-top: 20px;
  font-size: 24px;
}

.order-number {
  margin-top: 10px;
  font-size: 20px;
}

.continue-shopping-button{
    font-weight: bold;
    background-color: white;
    border: none;
}
.arrow {
  position: relative;
  animation: moveRight 2s infinite;
}
@keyframes moveRight {
  0% {
    left: 0;
  }
  100% {
    left: calc(20% - 10px); /* Adjust the value based on your requirement */
  }
}
.checkmark-container {
  position: relative;
  animation: zoomInOut 2s infinite;
}


.checkmark {
  font-size: 50px;
  color: green; 
  border: 5px solid green;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  text-align: center;
}

@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Additional styles for message, order number, and continue shopping button can be added here */





`
export { OrderNumberCss };
