import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../types/reducerTypes";
import {muteSoundAC} from "../redux/actions";
import {autoPlayThunk, initialThunk, newGameThunk, onClosePageThunk, onReloadedPageThunk} from "../redux/thunk";
import GameMenu from "./GameMenu";
import {Settings} from './Settings';
import {Stats} from "./Stats";
import Footer from './Footer';
import FinishGame from "./FinishGame";
import {mute} from "../utils/sounds";

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  
    
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const CardGrid = styled.div`
	width: 700px;
	align-self: flex-start;
  perspective: 700px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(auto, 140px);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  
  @media(max-width: 940px) {
  	max-width: 400px;
  	grid-template-columns: repeat(3, 1fr);
  	grid-template-rows: repeat(12, 1fr);
  	align-self: center;
  	perspective: 1000px;
  }
  
  @media(max-width: 580px) {
    order: 2;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 99vh;
    
  :focus {
    outline: none;
  }
`;


const Game: FC = () => {
	const cards = useSelector((state: IState) => state.gameCards)
	const isFinished = useSelector((state: IState) => state.isFinished)
	const muteSound = useSelector((state: IState) => state.muteSound)
	const keys = useSelector((state: IState) => state.settings.keys)
	const dispatch = useDispatch()

	const [openSettings, setOpenSettings] = useState(false)
	const [openStats, setOpenStats] = useState(false)


	useEffect(() => {
		dispatch(initialThunk())
	}, [])

	useEffect(() => {
		let gameState = localStorage.getItem('memory-game-state')
		if (gameState !== null) {
			dispatch(onReloadedPageThunk(JSON.parse(gameState)))
		}
	}, [])


	window.onbeforeunload = () => {
		dispatch(onClosePageThunk())
	}


	if(!openSettings) {
		document.onkeydown = (e) => {
			if (e.key === keys.muteKey) {
				mute(!muteSound)
				dispatch(muteSoundAC())
			}
			if (e.key === keys.fullscreenKey) {
				document.documentElement.requestFullscreen()
			}
			if (e.key === keys.newGameKey) {
				dispatch(newGameThunk())
			}
			if (e.key === keys.statsKey) {
				setOpenStats(prev => !prev)
			}
			if (e.key === keys.settingsKey) {
				setOpenSettings(prev => !prev)
			}
			if (e.key === keys.autoplayKey) {
				dispatch(autoPlayThunk())
			}
		}
	}


	return (
		<Wrapper>
			<GameContainer>
				{
					!isFinished ? <CardGrid>
						{
							cards.map((card, index) => <Card card={card}
																							 key={`card${index}`}/>)
						}
					</CardGrid> : <FinishGame/>
				}
				{
					!isFinished ? <GameMenu setOpenSettings={setOpenSettings}
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