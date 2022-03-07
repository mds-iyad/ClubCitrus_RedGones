import styled from "styled-components";
import css from "styled-components"


const gradiant = degs => css`
    background: linear-gradient(#e66465, #00a99d);
`;


export const Aside = styled.div`
    z-index: 1200;
    /* height: calc(100vh - 2rem); */
    height: 100%;
    width: 241px;
    display: flex;
    flex-direction: column;
    /* background: linear-gradient(195deg, #42424a, #191919); */
    background-color: #111827;
    border: none;
    /* box-shadow: 0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05); */
    /* margin-bottom: inherit; */
    left: 0;
    top: 0;
    outline: 0;
    width: 250px;
    transform: translateX(0);
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,background-color 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    overflow-y: auto;
    /* border-radius: 0.75rem; */
    /* margin: 1rem; */
    
`; 

export const NavDashItem = styled.li`
    text-decoration: none;
    
`;


