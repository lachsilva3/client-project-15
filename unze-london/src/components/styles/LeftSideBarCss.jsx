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

const LeftSideBarCss =styled.div`

.offcanvas{
  height: 1300vh;
}
.offcanvas-header{
  height: 30px;
  padding-top: 30px;
  
}
.title{
  text-align: center;
  margin-left: 0%;
}

.btn-group{
  height: 50px;
  width: 360px;
 margin-top: 8px;
  border-radius: 0;
  
}

.btn{
  border-radius: 0;
  padding-top: 10px;
}

.card{
  border-radius: 0;
  border: 0;
  margin-top: 8px;
  width: 160px;
  height: 130px;
  
}
.cardbody{
  margin-top: 0;
  
}
.card-img-top{
  border-radius: 0;
}
.card-title{
  text-align: center;
  height: 20px;
  font-size: 15px;
  margin-top: 5px;
}
.logo{
  margin-left: 8%;
}
.Form{
  margin-left: 17%;
  margin-top: 30px;
  font-size: calc(15px );
  
}

.Form input{
  border: none; 
  background-color: white;
  margin-left:10px ;
  border-bottom: 1px solid black;
}
.List{
  margin-top: 30px;
  display: flex;
  margin-left: 10%;
  font-size: calc(15px );
 
}
.List li{
  list-style-type: none;
  margin-left: 20px;
}

.options{
  display: flex;
  text-decoration: none;
  color: black;
  margin-left: 10px;
}
.options p{
  margin-left: 20px;
}


.accordion-button{
  box-shadow: none;
  background-color: white;
  height: 35px;
  
}
.accordionlist{
  list-style-type: none;
 margin-top: 10px;
  
}
.accordionlist li a{
  text-decoration: none;
  color: #000000;
}

  `
    export { LeftSideBarCss };
  