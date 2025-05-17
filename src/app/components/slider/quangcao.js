'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Quangcao() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
      <Image src="/chau do.jpg" alt="meww meww" width={500} height={100} priority/>
      </div>
      <div>
      <Image src="/chaubeni.jpg" alt="meww meww" width={500} height={100} priority/>
      </div>
    </Slider>
  );
}