import React from 'react';
import Slider from 'react-slick';
import Card from './microComponents/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Whole.css"
import TendyJson from "../Components/JSON/TrendyJson.json"
const Trendng = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='trend'>
      <h2>ChaCha ke Pasandida Tools 🔥</h2>
      <Slider {...settings}>
        {
          TendyJson.map((e)=><Card img={e.img} name={e.name} desc={e.Category} web={e.Website} short={e.short} Paid={e['Paid Plan']} rat={e.Rating}/>)
        }
      </Slider>
    </div>
  );
};

export default Trendng;
