import styled from 'styled-components';
import ImgSlider from './ImgSlider';

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  top: 70px;
  min-height: calc(100vh - 250px);
  overflowx: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(src/assets/images/home-background.png) center center no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home