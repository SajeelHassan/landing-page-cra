import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
import cImg from "../assets/images/slider/1.jpg";
import cImg1 from "../assets/images/slider/2.jpg";
import cImg2 from "../assets/images/slider/3.jpg";
import cImg3 from "../assets/images/slider/4.jpg";
import cImg4 from "../assets/images/slider/5.jpg";
const CarouselDiv = () => {
  return (
    <div className={classes.carouselWrapper}>
      <div className={classes.sectionCarousel}>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus={false}
          centerMode
          centerSlidePercentage={100}
          showThumbs={false}
          className={classes.mainCarousel}
        >
          <div className={classes.carouselItem}>
            <div className={classes.carouselImage}>
              <img src={cImg} alt="slider" />
            </div>
          </div>
          <div className={classes.carouselItem}>
            <div className={classes.carouselImage}>
              <img src={cImg1} alt="slider" />
            </div>
          </div>
          <div className={classes.carouselItem}>
            <div className={classes.carouselImage}>
              <img src={cImg2} alt="slider" />
            </div>
          </div>
          <div className={classes.carouselItem}>
            <div className={classes.carouselImage}>
              <img src={cImg3} alt="slider" />
            </div>
          </div>
          <div className={classes.carouselItem}>
            <div className={classes.carouselImage}>
              <img src={cImg4} alt="slider" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselDiv;
