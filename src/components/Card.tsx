import React from 'react';
import styled from "styled-components";

const CardContainer = styled.div`
  height: 130px;
  margin: 5px;
  position: relative;
  transform: scale(1);
  transition: transform .5s;
  transform-style: preserve-3d;
  cursor: pointer;
  &:hover {
  box-shadow: 0 0 12px 9px rgba(0, 201, 6, 0.33);
  }
`;

const ImgFront = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  position: absolute;
  backface-visibility: hidden;
`;

const ImgBack = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const Card = () => {
    return (
        <CardContainer>
            <ImgFront src={'https://sun9-61.userapi.com/impf/c851324/v851324779/adb42/IWaThP2W07M.jpg?size=500x454&quality=96&proxy=1&sign=f732b6b232ae7cbf0ab5d62dcca21cbd&type=album'} />
        </CardContainer>
    );
};

export default Card;