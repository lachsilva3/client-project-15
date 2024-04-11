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

const CheckoutCss =styled.div`


.cus1-container {
  display: flex;
}

.left, .right {
  flex: 1;
}

.left {
  background-color: lightblue;
}

.right {
  background-color: lightcoral;
}

@media (max-width: 768px) {
  .cus1-container {
    flex-direction: column-reverse; /* Reverses the order of the flex items on mobile */
  }
}

  `
    export { CheckoutCss };
  