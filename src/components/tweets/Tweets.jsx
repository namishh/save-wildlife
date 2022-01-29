import React, { useState } from "react";
import SingleTweet from "./SingeTweet";
import { tweets } from "../../context/data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Wave2 from "../waves/Wave2";
const Tweets = () => {
  const [thetweets, setTheTweets] = useState(tweets);
  const [current, setCurrent] = useState(0);
  const length = thetweets.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };
  return (
    <div className="tweets-wrapper">
      <Wave2/>
      <div className="tweets" id="people">
        <h1 className="heading-primary heading-white">What do people say?</h1>
        <div className="tweets-container">
          {/* <SingleTweet /> */}
          <FaArrowAltCircleLeft className="left" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right" onClick={nextSlide} />
          {thetweets.map((tweet, index) => {
            return (
              <div
                key={index}
                className={index === current ? "slide-active" : "slide"}
              >
                {index === current && <SingleTweet key={index} {...tweet} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default Tweets;
