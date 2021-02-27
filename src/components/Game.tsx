import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import backgroundImg from '../assets/img/background.jpg'
import {useDispatch, useSelector} from "react-redux";
import {IGameCard, IState} from "../types/reducerTypes";
import {flipCard, setCards} from "../redux/actions";
import {initialThunk, newGameThunk} from "../redux/thunk";
import GameMenu from "./GameMenu";
import {Settings} from './Settings';
import {Stats} from "./Stats";
import {useRef} from 'react';
import Footer from './Footer';

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const CardGrid = styled.div`
  width: 700px;
  min-height: 95vh;
  perspective: 700px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 140px);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  
  @media(max-width: 940px) {
      max-width: 400px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(12, 1fr)
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;



const Game: FC = () => {
    const cards = useSelector((state: IState) => state.gameCards)
    const dispatch = useDispatch()

    const [openSettings, setOpenSettings] = useState(false)
    const [openStats, setOpenStats] = useState(false)


    useEffect(() => {
        dispatch(initialThunk())
    }, [])

    return (
        <Wrapper>
            <GameContainer>
                <CardGrid>
                    {
                        cards.map((card, index) => <Card card={card}
                                                         key={`card${index}`}/>)
                    }
                </CardGrid>
                <GameMenu setOpenSettings={setOpenSettings}
                          setOpenStats={setOpenStats}/>
                {
                    openSettings && <Settings setOpenSettings={setOpenSettings}
                    />
                }

                {
                    openStats && <Stats setOpenStats={setOpenStats}/>
                }

            </GameContainer>
            <Footer/>
        </Wrapper>
    );
};

export default Game;