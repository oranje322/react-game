import React, {useState} from "react";
import styled from "styled-components";
import {ISettingsProps} from "../types/propsTypes";
import {useDispatch} from "react-redux";
import { setSettings } from "../redux/actions";


const SettingsOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(34, 34, 34, 0.8);
    display: flex;
`;

const SettingsWrapper = styled.div`
    width: 500px;
    background-color: #fff;
    margin: auto;
    padding: 15px;
    border-radius: 3px;
`;

const SettingsTitle = styled.h2`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 26px;
`;

const InputWrapper = styled.div`
    padding: 10px;
    border-top: 1px solid #000;
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    margin-top: 20px;
`;

const InputRange = styled.input.attrs({
    type: "range",
})`
    cursor: pointer;
`;

const Label = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    width: 50%;
`;

const Select = styled.select`
    font-size: 16px;
    padding: 3px;
    width: 100px;
`;

const CheckBox = styled.input.attrs({
    type: "checkbox",
})`
    width: 20px;
    height: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  background: #333333;
  margin-right: 15px;
  border-radius: 3px;
  font-size: 18px;
  max-width: 120px;
  color: #fff;

`;

export const Settings = ({setOpenSettings}:ISettingsProps) => {

    const [gameMode, setGameMode] = useState(0)
    const [speed, setSpeed] = useState(3000)
    const [showCards, setShowCards] = useState(false)

    const dispatch = useDispatch()

    const onClickSaveSettings = () => {
        dispatch(setSettings({
            gameMode,
            speed,
            showCards
        }))
        setOpenSettings(false)
    }


    return (
        <SettingsOverlay>
            <SettingsWrapper>
                <SettingsTitle>Settings</SettingsTitle>
                <InputWrapper>
                    <Label>Music Volume:</Label>
                    <InputRange
                        value={0}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Sounds Volume:</Label>
                    <InputRange
                        value={0}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Game Mode</Label>
                    <Select value={gameMode} onChange={(e)=> setGameMode(Number(e.target.value))}>
                        <option value="0">Junior</option>
                        <option value="1">Middle</option>
                        <option value="2">Senior</option>
                    </Select>
                </InputWrapper>
                <InputWrapper>
                    <Label>Speed</Label>
                    <Select value={speed} onChange={(e)=> setSpeed(Number(e.target.value))}>
                        <option value="3000">Slow</option>
                        <option value="2000">Standart</option>
                        <option value="1000">Fast</option>
                    </Select>
                </InputWrapper>
                <InputWrapper style={{borderBottom: '1px solid black'}}>
                    <Label>Show cards at start</Label>
                    <CheckBox checked={showCards} onChange={(e)=> setShowCards(e.target.checked)}/>
                </InputWrapper>
                <ButtonsWrapper>
                    <Button onClick={onClickSaveSettings}>
                        Save
                    </Button>
                    <Button onClick={() => setOpenSettings(false)}>
                        Cancel
                    </Button>
                </ButtonsWrapper>
            </SettingsWrapper>
        </SettingsOverlay>
    );
};