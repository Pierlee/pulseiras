import * as S from './style';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1desktop from '/assets/images/banner1desktop.svg';
import banner1tablet from '/assets/images/banner1tablet.svg';
import banner1mobile from '/assets/images/banner1mobile.svg';
import banner2desktop from '/assets/images/banner2desktop.svg';
import banner2tablet from '/assets/images/banner2tablet.svg';
import banner2mobile from '/assets/images/banner2mobile.svg';
import banner3desktop from '/assets/images/banner3desktop.svg';
import banner3tablet from '/assets/images/banner3tablet.svg';
import banner3mobile from '/assets/images/banner3mobile.svg';

function Carousel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (windowWidth <= 375) {
      setImages([
        banner1mobile,
        banner2mobile,
        banner3mobile,
      ]);
    } else if (windowWidth <= 768) {
      setImages([
        banner1tablet,
        banner2tablet,
        banner3tablet,
      ]);
    } else {
      setImages([
        banner1desktop,
        banner2desktop,
        banner3desktop,
      ]);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Container>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </S.Container>
  );
}

export default Carousel;
