import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import '/Users/gpqls/CommunityScaleUp/scaleup/src/main/scaleup-front/src/styles/main/Imageslide.css'
import images from '/Users/gpqls/CommunityScaleUp//scaleup/src/main/scaleup-front/src/components/images/img-main.jpg'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className='images-container'>
        <Slider {...settings}>
          <div className='images'>{/*이미지 슬라이딩 부분 */}
             <img className="main-images" alt="iPhone_01" src={images}  width="100%" height="100%"/>
          </div>
          <div className='images'>
             <img className="main-images" alt="iPhone_01" src={images}  width="100%" height="100%"/>
          </div>
          <div className='images'>
             <img className="main-images" alt="iPhone_01" src={images}  width="100%" height="100%"/>
          </div>
        </Slider>
      </div>
    );
  }
}