import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { collection, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  const colRef = collection(db, 'movies');

  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;

          case 'new':
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case 'original':
            original = [...original, { id: doc.id, ...doc.data() }];
            break;

          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisney,
          original: original,
          trending: trending,
        })
      );
    });

    // Cleanup function
    return () => unsubscribe();
  }, [username]);

  

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  margin-top: 70px;
  min-height: calc(100vh - 250px);
  overflowx: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px) 40px;

  &:after {
    background: url(/assets/images/home-background.png) center center/cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home