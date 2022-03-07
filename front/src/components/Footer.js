import { React } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: black;
  xl:text-6xl
  sm:text-3xl
  md:text-5xl
  lg:font-black
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-white
  `}
`;


const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-3
    pl-6
    pr-6
    md:pl-24
    md:pr-32
    mt-7
    md:mt-0
  `};
`;


const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    p-24
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
       <SectionContainer>
          <HorizontalContainer>
          </HorizontalContainer>
        </SectionContainer>
      <InnerContainer>
        <SectionContainer>
          <HeaderTitle>Liens du site</HeaderTitle>

        </SectionContainer>
       
        <SectionContainer>
          <HeaderTitle>Appellez nous</HeaderTitle>
          <HorizontalContainer>
          
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Trouvez nous</HeaderTitle>
          <HorizontalContainer>
          
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Pastel
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}