import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import styles from "../styles";
import { avatar, gradient } from "../assets";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 60000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  const reviewData = [
    {
      id: 0,
      review: `Using Daysheets has made touring more efficient and organized. It’s a complete game-changer.`,
      image: avatar,
      name: "Rob Mirhadi",
      title: "Tour Manager",
    },
    {
      id: 1,
      review: `I'm loving Daysheets! It's fast, and simple.`,
      image: avatar,
      name: "John Doe",
      title: "Production Manager",
    },
    {
      id: 2,
      review: `I won't use anything else!`,
      image: avatar,
      name: "John Doe",
      title: "Tour Manager",
    },
    {
      id: 3,
      review: `I'm loving Daysheets! It's fast, and simple.`,
      image: avatar,
      name: "John Doe",
      title: "Production Manager",
    },
    {
      id: 4,
      review: `I'm loving Daysheets! It's fast, and simple.`,
      image: avatar,
      name: "John Doe",
      title: "Tour Manager",
    },
  ];

  const review = reviewData.map((item, index) => (
    <ReviewCard
      key={item.id}
      review={item.review}
      image={item.image}
      name={item.name}
      title={item.title}
      opacity={index === currentSlide ? "opacity-100" : "opacity-50"}
    />
  ));

  return (
    <div className={`${styles.sectionBox} bg-blue relative`}>
      <div className={`relative`}>
        <Carousel
          responsive={responsive}
          className="z-10"
          arrows={true}
          centerMode={true}
          infinite={true}
          beforeChange={(nextSlide) => {
            setCurrentSlide(
              (nextSlide + reviewData.length - 2) % reviewData.length
            );
          }}
        >
          {review}
        </Carousel>
      </div>

      <img
        src={gradient}
        alt="Gradient background"
        className="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-25"
      />
    </div>
  );
};

export default Reviews;
