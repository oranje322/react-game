import React, {useEffect} from 'react';
import styled from "styled-components";
import Card from "./Card";
import backgroundImg from '../assets/img/background.jpg'
import {useDispatch, useSelector} from "react-redux";
import {IGameCard, IState} from "../types/reducerTypes";
import {flipCard, setCards} from "../redux/actions";

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const CardGrid = styled.div`
  width: 700px;
  perspective: 700px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;


const Game = () => {
    const cards = useSelector((state: IState) => state.gameCards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCards())
    },[])

    const handleClickCard = (card:IGameCard) => {
        dispatch(flipCard(card.id))
    }

    return (
        <GameContainer>
            <CardGrid>
                {
                    cards.map((card, index) => <Card card={card}
                                                     handleClickCard={handleClickCard}
                                                     key={`card${index}`}/>)
                }
            </CardGrid>
        </GameContainer>
    );
};

export default Game;