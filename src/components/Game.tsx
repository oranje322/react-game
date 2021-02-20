import React from 'react';
import styled from "styled-components";
import Card from "./Card";


const GameContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`;

const CardGrid = styled.div`
  background: #b8b6b6;
  width: 700px;
  perspective: 1000px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

const initialMass = new Array(36).fill(0)

const Game = () => {
    return (
        <GameContainer>
            <CardGrid>
                {
                    initialMass.map(value => <Card/>)
                }
            </CardGrid>
        </GameContainer>
    );
};

export default Game;