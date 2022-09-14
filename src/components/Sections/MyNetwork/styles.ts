import styled from "styled-components";




export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`




export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 10% 45%;


    @media (max-width: 575.98px) {
        display: flex;
        flex-direction: column;
    }
`



export const Description = styled.p`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray60};
    max-width: 800px;
    margin-bottom: 5rem;

    span {
        color: #FFA800;
    }

    @media (max-width: 991.98px) {
        width: 100%;
    }
`




export const Comments = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;

    @media (max-width: 575.98px) {
        align-items: center;
    }
`


export const CommentContainer = styled.div`
    position: relative;
    display: flex;
    gap: 1rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 55px;
        width: 40px;
        height: 30px;
        border-radius: 50%;
        border-top: 10px solid #252525;
    }
`


export const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Name = styled.p`
    align-self: flex-end;
    font-size: .9rem;
    margin-top: .5rem;
    color: ${({ theme }) => theme.colors.gray60};

    @media (max-width: 575.98px) {
        text-align: end;
        width: 100%;
        font-size: .8rem;
    }
`

export const Message = styled.div`
    padding: 1rem;
    background: #252525;
    border-radius: 1rem;
    color: #fff;
    width: 350px;
    
    @media (max-width: 575.98px) {
        width: 280px;
        font-size: .9rem;
    }

    @media (min-width: 575.99px) and (max-width: 991.98px) {
        width: 200px;
    }
`


export const PictureContainer = styled.div`
    width: 100%;
    height: 100%;

    .image {
        border-radius: 50%;
    }
`



export const NetworkContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`


export const Network = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 575.98px) {
        text-align: center;
    }
`



export const NetworkTitle = styled.div`
    font-size: 1.2rem;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`



export const NetworkDescription = styled.div`
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.gray60};
`



export const Button = styled.a`
    border: 1px solid ${({ theme }) => theme.colors.gray60};
    color: ${({ theme }) => theme.colors.gray60};
    width: fit-content;
    padding: .25rem 2rem;
    border-radius: .25rem;
    margin-top: 10px;
    cursor: pointer;

    @media (max-width: 575.98px) {
        margin: 0 auto;
    }


    transition: ease .4s all;
    &:hover {
        background: #fff;
        color: #000;
    }
`


export const StickersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 575.98px) {
        display: none;
    }
`



export const StickerMobileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;

    @media (min-width: 575.99px) {
        display: none;
    }
`



interface HeaderStickProps {
    height?: number;
}

export const HeaderStick = styled.div<HeaderStickProps>`
    width: 1px;
    border-radius: 3rem;
    height: ${({ height }) => height?height+'px':'50px'};
    background: linear-gradient(0deg, ${({theme}) => theme.colors.gray50} 0%, rgba(0,0,0,0) 100%);
`


export const FinalStick = styled.div`
    width: 1px;
    border-radius: 3rem;
    height: 150px;
    background: linear-gradient(180deg, ${({theme}) => theme.colors.gray50} 0%, rgba(0,0,0,0) 100%);
`


export const CircleStick = styled.div`
    width: 15px;
    height: 15px;
    border: 2px solid ${({theme}) => theme.colors.gray50};
    border-radius: 50%;
    transform: translateY(-2px);
`


interface DashedStickProps {
    height: number;
}



export const DashedStick = styled.div<DashedStickProps>`
    border-radius: 3rem;
    height: ${({height}) => height}px;
    border: .1px dashed ${({theme}) => theme.colors.gray50};
    transform: translateY(-2px);
    box-sizing: content-box;
`