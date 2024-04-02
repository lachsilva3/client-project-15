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

const AdminPanelCss =styled.div`

.split-screen {
  display: flex;
  flex-wrap: wrap;
}

.left-half{
  width: 100%;
 background-color: #f0f0f0; /* Left half background color */
}
.right-half {
  width: 100%;
  padding: 20px;
}


.abutton{
  width: 100%;
  border:1px solid #eaeaea;
}
.abutton:hover{
  background-color: #eaeaea;
  color: black;
  border:1px solid black;
}

/* manage producst css */
.button-container {
  width: 100%;
 text-align: center;
}

.custom-button {
 background-color: white;
  color: black;
  border:1px solid black;
  margin-left: 5px;
  padding: 5px;
  margin-bottom: 5px;
}
.custom-button:hover{
  background-color: black;
  color: white;
}

  `
    export { AdminPanelCss };
  