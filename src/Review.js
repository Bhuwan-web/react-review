import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];
  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };
  const handlePrev = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const handleNext = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const handleRandom = () => {
    let random = Math.round(people.length * Math.random());
    if (random === index) {
      random += 1;
    }
    setIndex(checkIndex(random));
  };
  return (
    <>
      <section className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <p className="author">{name.toLocaleUpperCase()}</p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <div>
            <button className="prev-btn" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={handleRandom}>
            Random
          </button>
        </div>
      </section>
    </>
  );
};

export default Review;
