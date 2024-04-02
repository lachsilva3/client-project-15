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

const RightSideBarCss =styled.div`
.App {
  display: flex;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 2;
}

.content {
  flex-grow: 1;
}

.sidebar {
  width: 300px;
  overflow: scroll;
  height: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  right: -300px;
  transition: right 0.3s;
  z-index: 1;
}

.sidebar.open {
  right: 0;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  padding: 10px;
}
.title{
   padding: 15px;
  display: flex;
  gap: 6.5rem;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
}
  `
    export { RightSideBarCss };