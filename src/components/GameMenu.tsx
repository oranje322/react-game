import React from 'react';
import styled from "styled-components";
import Stats from "./Counter";
import {useDispatch} from "react-redux";
import {closeAllCards, startGame} from "../redux/actions";
import {newGameThunk} from "../redux/thunk";
import {IGameMenuProps} from "../types/propsTypes";
import Counter from "./Counter";

const GameMenuContainer = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
   
`;

const SettingsBtn = styled.button`
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



const GameMenu = ({setOpenSettings, setOpenStats}:IGameMenuProps) => {

    const dispatch = useDispatch()


    const onClickStartGame = () => {
        dispatch(newGameThunk())
    }

    return (
        <GameMenuContainer>
            <Counter/>
            <SettingsBtn onClick={() => setOpenStats(true)}>
                Stats
            </SettingsBtn>
            <SettingsBtn onClick={()=> setOpenSettings(true)}>
                Settings
            </SettingsBtn>
            <SettingsBtn onClick={onClickStartGame}>
                New Game
            </SettingsBtn>

        </GameMenuContainer>
    );
};

export default GameMenu;