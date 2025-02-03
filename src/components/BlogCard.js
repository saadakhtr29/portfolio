import React from "react";
import styled from "styled-components";

const blogCard = () => {
  return (
    <StyledWrapper>
      <div className="cards-container">
        <div className="card">
          <div className="title-1">Blog 1</div>
          <div className="content">Coming Soon</div>
          <button className="btn">Read more</button>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
        </div>
        <div className="card">
          <div className="title-1">Blog 2</div>
          <div className="content">Coming Soon</div>
          <button className="btn">Read more</button>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
        </div>
        <div className="card">
          <div className="title-1">Blog 3</div>
          <div className="content">Coming Soon</div>
          <button className="btn">Read more</button>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards-container {
    display: flex;
    justify-content: space-between; /* Distributes space evenly */
    gap: 15px; /* Adds a gap between the cards */
    padding: 15px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 220px; /* Reduced height */
    width: 160px; /* Reduced width */
    background-color: #2b223f;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #00000044;
    transition: 0.4s ease-out;
    position: relative;
  }

  .card:hover {
    transform: translateY(-10px);
    transition: 0.4s ease-out;
    text-shadow: 2px 2px 8px #6e5b94;
  }

  .title-1 {
    color: #ffffff;
    font-size: 18px; /* Reduced font size */
    font-weight: 800;
    margin-top: 10px;
  }

  .btn {
    width: 100px; /* Reduced button size */
    height: 30px; /* Adjusted height */
    border-radius: 8px;
    border: none;
    background-color: #4a2f7c;
    color: #fff;
    transition: 0.2s ease-out;
  }

  .btn:hover {
    transition: 0.2s ease-out;
    background-color: #8a4ff8;
    color: #ffffff;
    box-shadow: 0px 0px 10px rgba(157, 71, 255, 0.5),
      0px 5px 5px -1px rgba(163, 58, 233, 0.25),
      inset 4px 4px 8px rgba(219, 175, 255, 0.5),
      inset -4px -4px 8px rgba(137, 19, 216, 0.35);
  }

  .bar {
    width: 100%;
    height: 4px;
    margin-bottom: 10px;
  }

  .emptybar {
    background-color: #201c29;
    width: 100%;
    height: 100%;
  }

  .filledbar {
    width: 0px;
    height: 100%;
    background: linear-gradient(90deg, #6831cfab, #a777ff 100%);
    transition: 0.4s ease-out;
  }

  .card:hover .filledbar {
    width: 100%;
  }

  .content {
    color: #eae0fd;
    font-size: 0.6rem; /* Reduced font size */
    text-align: center;
    margin: 10px 0;
  }
`;

export default blogCard;
