import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: true,
          centerPadding: '20%',
          centerMode: true,
          verticalSwiping: true,
          slidesToShow: 1.45,
        },
      },
    ],
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src='/assets/images/slider-badag.jpg' alt='' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/assets/images/slider-badging.jpg' alt='' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/assets/images/slider-scale.jpg' alt='' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/assets/images/slider-scales.jpg' alt='' />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  padding-top: 32px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-prev {
    left: -25px;

    @media (max-width: 992px) {
      left: 0px;
    }
  }

  .slick-next {
    right: -25px;

    @media (max-width: 992px) {
      right: 0px;
    }
  }
`;

const Wrap = styled.div`
  position: relative;
  border-radius: 4px;
  cursor: pointer;

  a {
    border-radius: 4px;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
