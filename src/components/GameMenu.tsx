import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {closeAllCards, startGame} from "../redux/actions";
import {newGameThunk} from "../redux/thunk";
import {IGameMenuProps} from "../types/propsTypes";
import {IState} from "../types/reducerTypes";

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

const CounterText = styled.p`
   color: #fff;
   margin: 5px 0;
   font-size: 18px;
   margin-bottom: 20px;
`;



const GameMenu = ({setOpenSettings, setOpenStats}:IGameMenuProps) => {

    const dispatch = useDispatch()

    const count = useSelector((state:IState) => state.count)


    const onClickStartGame = () => {
        dispatch(newGameThunk())
    }

    return (
        <GameMenuContainer>
            <CounterText>Current steps: {count}</CounterText>
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