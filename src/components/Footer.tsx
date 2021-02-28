import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 43%;
    display: flex;
    justify-content: center;
    color: #fff;
    margin-top: 5px;
    margin-bottom: 3px;
    
    @media(max-width: 940px) {
        left: 30%;
  
    }
`;

const Text = styled.span`
    margin-right: 5px;
`;

const Link = styled.a`
    text-decoration: none;
    color: #fff;
`;

const Img = styled.img`
    width: 40px;
    margin-left: 5px;
`;


const Footer = () => {
    return (
        <FooterContainer>
            <Text>Created by</Text>
            <Link href={'https://github.com/oranje322'}>@oranje322</Link>
            <Text>, 2021</Text>
            <Link href={'https://rs.school/react/'}>
                <Img src={'img/logo.svg'}/>
            </Link>

        </FooterContainer>
    );
};

export default Footer;