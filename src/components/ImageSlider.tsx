import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {

    let settings:any = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    const Items = [
        {slider: "/images/slider-badging.jpg"},
        {slider: "/images/slider-badag.jpg"},
        {slider: "/images/slider-scale.jpg"},
        {slider: "/images/slider-scales.jpg"},
    ]

  return (
    
    <Carousel {...settings}>
        {Items.map((d) => (
            <Wrap>
                <img src={d?.slider} alt="badging" />
            </Wrap>
        ))}
    </Carousel>
  )
}


const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
       &:before {
        font-size: 10px;
        color:rgb(150, 158, 171);
        
       }  
    }
    li.slick-active button::before {
        color:white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`
const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        height:100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8)
        }
    }
`