import styled from "styled-components";




export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    
    @media (max-width: 991.98px) {
        width: calc(100vw - (2 * .8rem));
        margin: 0 auto;
        border-left: 2px solid #000;
        border-right: 3.5px solid #000;
    }
    

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 0;
        height: 100%;
        box-shadow: 0 0 25px 50px #000;
        
        @media (max-width: 991.98px) {
            box-shadow: 0 0 25px 46px #000;
        }
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        width: 0;
        height: 100%;
        box-shadow: 0 0 25px 50px #000;

        @media (max-width: 991.98px) {
            box-shadow: 0 0 25px 46px #000;
        }
    }
`


export const ScrollerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    padding: 1rem 0;


    &:nth-of-type(1) {
        border-top: 1px solid ${({ theme }) => theme.colors.gray50};
    }

    & + & {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
    }
`


interface ScrollerRowProps {
    speed: string;
    numbersOfWords: number;
}


export const ScrollerRow = styled.div<ScrollerRowProps>`
    width: calc(250px * ${(props) => props.numbersOfWords * 2});
    display: flex;
    flex-wrap: nowrap;
    
    animation: scrollerAnime infinite linear forwards;
    animation-duration: ${(props) => props.speed};

    @keyframes scrollerAnime {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-250px * ${(props) => props.numbersOfWords}));
        }
    }

`


export const ScrollerText = styled.span`
    text-align: center;
    width: 250px;
    color: #fff !important;
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`