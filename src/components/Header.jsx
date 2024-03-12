import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history('/home');
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((e) => {
          alert(e.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history('/');
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src='/assets/images/logo.svg' alt='Disney+' />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href='/home'>
              <img src='/assets/images/home-icon.svg' alt='HOME' />
              <span>HOME</span>
            </a>
            <a>
              <img src='/assets/images/search-icon.svg' alt='SEARCH' />
              <span>SEARCH</span>
            </a>
            <a>
              <img src='/assets/images/watchlist-icon.svg' alt='WATCHLIST' />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src='/assets/images/original-icon.svg' alt='ORIGINALS' />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src='/assets/images/movie-icon.svg' alt='MOVIE' />
              <span>MOVIE</span>
            </a>
            <a>
              <img src='/assets/images/series-icon.svg' alt='SERIES' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            {username && userPhoto && (
              <UserImg src={userPhoto} alt={username} />
            )}
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    width: 100%;
    display: block;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  padding: 0;
  margin: 0 auto 0 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0;
      margin-left: 4px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        background-color: rgb(249, 249, 249);
        height: 2px;
        width: auto;
        opacity: 0;
        border-radius: 0 0 4px 4px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        opacity: 1 !important;
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }

  
  @media (max-width: 992px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    font-weight: 600;
    cursor: pointer;
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  display: ${({ src }) => (src ? 'block' : 'none')};
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19, 19, 19);
  border-radius: 4px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 110px;
  text-align: center;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
