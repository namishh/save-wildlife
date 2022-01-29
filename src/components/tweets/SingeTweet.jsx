import React from "react";
import { FaRetweet, FaHeart, FaComment } from "react-icons/fa";

const SingleTweet = ({ name, tag, text, img }) => {
  return (
    <div className="single-tweet">
      {/*2:30 se pehle slider ban jana chaiye*/}
      <div className="tweet-info">
        <div className="img">
          <img src={img} />
        </div>
        <div className="name">
          <h2>{name}</h2>
          <p>{tag}</p>
        </div>
      </div>
      <div className="tweet-text">{text}</div>
      <div className="tweet-nav">
        <FaRetweet />
        <FaComment />
        <FaHeart />
      </div>
    </div>
  );
};

export default SingleTweet;
