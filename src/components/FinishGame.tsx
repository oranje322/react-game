import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {newGameThunk} from "../redux/thunk";
import {IState} from "../types/reducerTypes";
import gameOverImg from '../assets/otherImg/gameover.png'

const FinishGameContainer = styled.div`
  width: 700px;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
    @media(max-width: 940px) {
      max-width: 400px;
      }
`;

const FinishText = styled.p`
    color: #fff;
    font-size: 28px;
    font-weight: bold;
`;

const Img = styled.img`
    margin-top: 50px;
`;

const NewGameBtn = styled.button`
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

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    color: #fff;
`;

const Tr = styled.tr`
    display: flex;
`;

const Th = styled.th`
  border: 1px solid #f5f6ef;
    padding: 5px;
    flex: 1 1;
`;

const Td = styled.td`
  border: 1px solid #f5f6ef;
    padding: 5px;
    flex: 1 1;
`;

const Caption = styled.caption`
    margin: 10px 0;
    font-weight: bold;
    font-size: 20px;
    
`;


const FinishGame = () => {

    const steps = useSelector((state: IState) => state.count)
    const stat = useSelector((state: IState) => state.stat)

    const last5try = stat.slice(-5)

    const gameModes = ['Junior', 'Middle', 'Senior']


    const dispatch = useDispatch()

    return (
        <FinishGameContainer>
            <Img src={gameOverImg} alt="gameover"/>
            <FinishText>
                You spent {steps} steps for this game, dude.
            </FinishText>
            <NewGameBtn onClick={() => dispatch(newGameThunk())}>Play again</NewGameBtn>

            {!!last5try.length &&
            <Table>
                <Caption>Last 5 attempts</Caption>
                <tbody>
                <Tr>
                    <Th>#</Th>
                    <Th>Steps</Th>
                    <Th>Mode</Th>
                    <Th>Date</Th>
                </Tr>
                {
                    last5try.map((s, index) => (
                        <Tr key={index}>
                            <Td>{s.attempt}</Td>
                            <Td>{s.steps}</Td>
                            <Td>{gameModes[s.gameMode]}</Td>
                            <Td>{s.date}</Td>
                        </Tr>
                    ))
                }
                </tbody>
            </Table>
            }
        </FinishGameContainer>
    );
};

export default FinishGame;