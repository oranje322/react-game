import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import backgroundImg from '../assets/img/background.jpg'
import {useSelector} from "react-redux";
import {IState} from "../types/reducerTypes";

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
    const cards = useSelector((state: IState) => state.cards)
    return (
        <GameContainer>
            <CardGrid>
                {
                    cards.map(card => <Card card={card}/>)
                }
            </CardGrid>
        </GameContainer>
    );
};

export default Game;