import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.css";
import React from "react";

const ImageSlider = ({ pictures }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>
      <div className="tag">
        <h2 className="text-slider">GALERIA DE IMAGENES</h2>
      </div>
      <div className="imgslider">
        <Slider {...settings}>
          {pictures.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
