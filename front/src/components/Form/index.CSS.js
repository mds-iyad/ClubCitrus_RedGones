import React from "react";
import styled from 'styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';



export const FormCard = styled.div`
background-color: #f7f7f7;
      padding: 20px 25px 30px;
     height:700px;
      margin: 0 auto 25px;
      margin-top: 50px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const FormContent = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Slogan = styled.h1`
${tw`
  font-bold
  text-2xl
  xl:text-4xl
  sm:text-3xl
  md:text-5xl
  lg:font-black
  md:font-extrabold
  text-black
  mb-4
  sm:leading-snug
  lg:leading-normal
  xl:leading-relaxed
`};
`;