import React from 'react';
import styled from "styled-components";
import {ICardProps} from "../types/propsTypes";
import {useDispatch, useSelector} from "react-redux";
import {flipCardThunk} from "../redux/thunk";
import {IState} from "../types/reducerTypes";

const CardContainer = styled.div`
  height: 130px;
  width: 102px;
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
    transform: rotateY(180deg);}
  &.disable {
    pointer-events: none;}
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


const Card = ({card}: ICardProps) => {

	const dispatch = useDispatch()

	const isAutoplay = useSelector((state: IState) => state.autoplayMemory.length > 0)

	const {imageUrl, isFlipped, pairFound} = card

	const onClickCard = () => {
		dispatch(flipCardThunk(card))
	}

	return (
		<CardContainer onClick={onClickCard}
									 className={`${isFlipped ? 'flip' : ''} ${isAutoplay || pairFound ? 'disable' : ''}`}>
			<ImgFront src={`/img/${imageUrl}`}/>
			<ImgBack src={`/img/backface.jpg`}/>
		</CardContainer>
	);
};

export default Card;