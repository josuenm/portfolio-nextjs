import styled from "styled-components";



interface GradientProp { gradient: string }



export const Container = styled.div`
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 991.98px) {
        max-width: 100%;
    }
`


export const Phrase = styled.h3`
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-align: center;
`


export const Title = styled.h3<GradientProp>`
    background: ${(props) => props.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 1.5rem;
    margin-top: 1rem;
`


export const Trail = styled.div<GradientProp>`
    width: 3px;
    height: 100px;
    background: ${(props) => props.gradient};
    margin-top: 20px;
    border-radius: 50% 50% 0% 0%;
`


export const Circle = styled.div<GradientProp>`
    width: 45px;
    height: 45px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.gradient};

    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: 1.2rem;
`


