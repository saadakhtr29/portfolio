import React from 'react';
import styled from 'styled-components';

const projectCard1 = () => {
  return (
    <StyledWrapper>
      <div className="one-div">
        <div className="text">Memory Card Game</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .one-div {
    position: relative;
    height: 250px;
    width: 180px;
    background-color: rgb(15, 15, 15);
    transform-style: preserve-3d;
    animation: rot 2s infinite ease;
    border-radius: 20px;
    box-shadow: 0 0 30px 0px, inset 0 0 90px 0px;
    color:rgb(180, 174, 174);
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text{
  font-size: 14px;
  }

  .one-div .text {
    opacity: 0;
    transition: all 0.5s;
  }

  .one-div:hover.one-div .text {
    scale: 1.2;
    opacity: 0.7;
  }

  .one-div:hover {
    box-shadow: 0 0 50px 0px, inset 5px 5px 20px 0px black;
  }

  @keyframes rot {
    0% {
      transform: rotateX(-15deg) translateY(0px);
    }

    50% {
      transform: rotateX(-15deg) translateY(-10px);
    }

    100% {
      transform: rotateX(-15deg) translateY(0px);
    }
  }`;

export default projectCard1;
