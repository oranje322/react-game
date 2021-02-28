import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import backgroundImg from '../assets/img/background.jpg'
import {useDispatch, useSelector} from "react-redux";
import {IGameCard, IState} from "../types/reducerTypes";
import {flipCard, muteSoundAC, setCards} from "../redux/actions";
import {initialThunk, newGameThunk} from "../redux/thunk";
import GameMenu from "./GameMenu";
import {Settings} from './Settings';
import {Stats} from "./Stats";
import {useRef} from 'react';
import Footer from './Footer';
import FinishGame from "./FinishGame";
import {mute} from "../utils/sounds";

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
    
    :focus {
       outline: none;
   }
`;



const Game: FC = () => {
    const cards = useSelector((state: IState) => state.gameCards)
    const isFinished = useSelector((state:IState) => state.isFinished)
    const muteSound = useSelector((state:IState) => state.muteSound)
    const keys = useSelector((state:IState) => state.settings.keys)
    const dispatch = useDispatch()

    const [openSettings, setOpenSettings] = useState(false)
    const [openStats, setOpenStats] = useState(false)


    useEffect(() => {
        dispatch(initialThunk())
    }, [])

    const handleKeyDown = (e:React.KeyboardEvent) => {
        if(e.key === keys.muteKey) {
            mute(!muteSound)
            dispatch(muteSoundAC())
        }
        if(e.key === keys.fullscreenKey) {
            document.documentElement.requestFullscreen()
        }
        if(e.key === keys.newGameKey) {
            dispatch(newGameThunk())
        }
        if(e.key === keys.statsKey) {
            setOpenStats(prev => !prev)
        }
        if(e.key === keys.settingsKey) {
            setOpenSettings(prev => !prev)
        }

    }

    //todo добавить хоткеи
    //todo добавить страницу about
    //todo звук фейла
    //todo автоплей


    return (
        <Wrapper tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
            <GameContainer>

                {
                    !isFinished ?  <CardGrid>
                        {
                            cards.map((card, index) => <Card card={card}
                                                             key={`card${index}`}/>)
                        }
                    </CardGrid> : <FinishGame/>


                }

                {
                    !isFinished ?  <GameMenu setOpenSettings={setOpenSettings}
                                            setOpenStats={setOpenStats}/> : ''
                }


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