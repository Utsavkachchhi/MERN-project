import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/banner1.jpg";
import Image2 from "../assets/Banner.png";
import Image3 from "../assets/Banner-2.png";

const Home = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div1>
          <img style={{ width: "100%" }} src={Image1} alt="imgae" />
        </div1>
        <div>
          <img style={{ width: "100%" }} src={Image1} alt="imgae" />
        </div>
        <div>
          <img style={{ width: "100%" }} src={Image1} alt="imgae" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
