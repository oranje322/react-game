import React, {useState} from 'react';
import styled from "styled-components";
import img from '../assets/img/ram.png'
import back from '../assets/img/back.jpg'

const CardContainer = styled.div`
  height: 140px;
  margin: 5px;
  position: relative;
  transform: scale(1);
  transition: transform .5s;
  transform-style: preserve-3d;
  cursor: pointer;
  &:hover {
  box-shadow: 0 0 12px 9px rgba(0, 201, 6, 0.33);
  }
  &.flip {
    transform: rotateY(180deg);
`;

const ImgFront = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const ImgBack = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;



const Card = ({card}:any) => {
    const [flipped, setFlipped] = useState(true);

    return (
        <CardContainer onClick={()=> setFlipped(prev => !prev) } className={flipped ? 'flip' : ''}>
            <ImgFront src={`assets/img/${card}`} />
            <ImgBack src={`assets/img/back.jpg`} />
        </CardContainer>
    );
};

export default Card;