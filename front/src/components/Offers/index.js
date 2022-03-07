import React from "react";
import styled from 'styled-components';
import { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 150px;
`;

const Title = styled.h2`
    /* font-size: 1.3rem; */
    padding-bottom: 0px;
    font-weight: bold;
`;

const Description = styled.span`
    color: #3CC68A;
    font-size: 1.5rem;
    font-weight: 500;
    
`;

function Offers(){
    return(
        <Container>
            <Description>Nos offres</Description>
            <Title>Choisissez votre plan</Title>
        </Container>
    );
}


export default Offers;