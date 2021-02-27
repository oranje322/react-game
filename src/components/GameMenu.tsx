import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {newGameThunk} from "../redux/thunk";
import {IGameMenuProps} from "../types/propsTypes";
import {IState} from "../types/reducerTypes";
import {mute} from "../utils/sounds";

const GameMenuContainer = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
   
`;

const MenuBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 10px;
  background: #f5f6ef;
  border-radius: 3px;
  font-size: 18px;
  max-width: 120px;
  margin-bottom: 10px;
`;

const CounterText = styled.p`
   color: #fff;
   margin: 5px 0;
   font-size: 18px;
   margin-bottom: 20px;
`;



const GameMenu = ({setOpenSettings, setOpenStats}:IGameMenuProps) => {

    const dispatch = useDispatch()
    const count = useSelector((state:IState) => state.count)

    const [muteSound, setMuteSound] = useState(false)


    const onClickStartGame = () => {

        dispatch(newGameThunk())
    }

    const onClickFullScreen = () => {
        document.documentElement.requestFullscreen()
    }


    const onClickMute = () => {

        if(!muteSound) {
            mute(true)
        } else {
            mute(false)
        }
        setMuteSound((prev) => !prev)
    }

    return (
        <GameMenuContainer>
            <CounterText>Current steps: {count}</CounterText>
            <MenuBtn onClick={() => setOpenStats(true)}>
                Stats
            </MenuBtn>
            <MenuBtn onClick={()=> setOpenSettings(true)}>
                Settings
            </MenuBtn>
            <MenuBtn onClick={onClickFullScreen}>
                Full Screen
            </MenuBtn>
            <MenuBtn onClick={onClickMute}>
                {muteSound ? 'Unmute' : 'Mute' }
            </MenuBtn>
            <MenuBtn onClick={onClickStartGame}>
                New Game
            </MenuBtn>

        </GameMenuContainer>
    );
};

export default GameMenu;