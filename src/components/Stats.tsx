import React from 'react';
import styled from "styled-components";

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


const Stats = () => {
    return (
        <StatsContainer>
            <Text>Лучший результат: 0</Text>
            <Text>Предыдущий результат: 0</Text>
            <Text>Текущий результат: 0</Text>
        </StatsContainer>
    );
};

export default Stats;