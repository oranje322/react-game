import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../types/reducerTypes";

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const Text = styled.p`
   color: #fff;
   margin: 5px 0;
   font-size: 18px;
`;


const Counter = () => {

    const count = useSelector((state:IState) => state.count)

    return (
        <StatsContainer>
            <Text>Лучший результат: 0</Text>
            <Text>Предыдущий результат: 0</Text>
            <Text>Текущий результат: {count}</Text>
        </StatsContainer>
    );
};

export default Counter;