import React, {useState} from "react";
import styled from "styled-components";
import {ISettingsProps, IStatsProps} from "../types/propsTypes";
import {useSelector} from "react-redux";
import {IState} from "../types/reducerTypes";


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
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10;
    font-size: 26px;
    border-bottom: 1px solid black;
`;

const StatsSubtitle = styled.h3`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 20px;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
`;


const ButtonsWrapper = styled.div`
    margin-top: 20px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;


const Label = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    width: 50%;
    margin-left: 8px;
`;

const Select = styled.select`
    font-size: 16px;
    padding: 3px;
    width: 100px;
`;

const ResultWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ResultText = styled.p`
    margin: 8px 10px;
    font-size: 16px;
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

export const Stats = ({setOpenStats}: IStatsProps) => {

    const subtitleNames = ['Junior', 'Middle', 'Senior']

    const [selectedGameMode, setSelectedGameMode] = useState(0)
    const stat = useSelector((state: IState) => state.stat)


    return (
        <SettingsOverlay>
            <SettingsWrapper>
                <SettingsTitle>Stats</SettingsTitle>
                <InputWrapper>
                    <Label>Game Mode</Label>
                    <Select value={selectedGameMode} onChange={(e) => setSelectedGameMode(Number(e.target.value))}>
                        <option value="0">Junior</option>
                        <option value="1">Middle</option>
                        <option value="2">Senior</option>
                    </Select>
                </InputWrapper>
                <div>
                    <StatsSubtitle>{subtitleNames[selectedGameMode]}</StatsSubtitle>
                    {
                        stat.map(s => selectedGameMode === s.gameMode ? (
                            <ResultWrapper key={`s${s.attempt}`}>
                                <ResultText>Номер попытки: {s.attempt}</ResultText><ResultText>Кол-во ходов: {s.steps}</ResultText>
                            </ResultWrapper>) : ''
                        )
                    }

                </div>


                <ButtonsWrapper>
                    <Button>
                        Save
                    </Button>
                    <Button onClick={() => setOpenStats(false)}>Cancel</Button>
                </ButtonsWrapper>
            </SettingsWrapper>
        </SettingsOverlay>
    );
};