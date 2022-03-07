import React from "react";
import styled from 'styled-components';
import { css } from 'styled-components';

// color1 = #00dbde
// color2 = #fc00ff
// color3 = #9198e5

const gradiant = degs => css`
    background: linear-gradient(#e66465, #00a99d);
`;


export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 470px;
    text-align: center;
    padding: 3rem 0 2rem;
    border-radius: 0.5rem;
    color: white;
    ${gradiant()};
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.025),
                0 9px 46px 8px rgba(0,0,0,0.025),
                0 11px 15px -7px rgba(0,0,0,0.025);

`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    flex: 0 0 auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    ${gradiant()};
    box-shadow: 0 11px 15px -7px rgba(0,0,0,0.25);
`;

export const PlanTitle = styled.div`
    font-size: 1.25rem;
`;

export const PlanCost = styled.div`
    font-size: 2rem;
    font-weight: 700;
    padding: 20px 0px;
`;

export const FeatureListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.325rem;
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    height: 40px;
    padding: 0 2rem;
    border: 0;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 0.85 );
    box-shadow: 0 11px 15px -7px rgba(0,0,0,0.25);
    transition: background 0.25s;
    cursor: pointer;

    &:hover { background: rgba(255, 255, 255, 1 ); }
`

export const FeaturesContainer = styled.div`
    margin: 20px 0px;
    padding: 5px 20px;
    border-radius: 1rem;
    /* border: 0.1rem white solid; */
    display: flex;
    flex-direction: column;
    align-items: start;

`;

export const Check = styled.i`
    margin-right: 10px; 
`;

export const Commentaire = styled.span`
    font-size: 1rem;
    color: lightgray;
    margin-top: -30px;
`;