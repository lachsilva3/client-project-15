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

const ContentCss =styled.div`

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
hr{
    max-width:1000px;
    margin: 0 auto;
}
.content-text {
  max-width: 100%;
}
p{
    color: grey; 
}
.content-image {
  max-width: 100%;
  height: auto;
  margin-top: 20px; /* Adjust spacing between paragraphs and image */
}
.container{
    max-width: 1000px;
}
  
ol {
  max-width: 350px;
  counter-reset: my-awesome-counter;
  list-style: none;
  padding-left: 40px;
}
ol li {
  margin: 0 0 0.5rem 0;
  counter-increment: my-awesome-counter;
  position: relative;
}
ol li::before {
  content: counter(my-awesome-counter);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  --size: 25px;
  left: calc(-1 * var(--size) - 10px);
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  top: 0;
  background: #b18ade;
  border-radius: 50%;
  text-align: center;
}


@media screen and (min-width: 768px) {
  .content-container {
    flex-direction: row;
    align-items: flex-start;
  }

  .content-text {
    max-width: 70%;
  }

  .content-image {
    max-width: 30%;
    margin-left: 20px; /* Adjust spacing between paragraphs and image */
  }
}


  `
    export { ContentCss };
  