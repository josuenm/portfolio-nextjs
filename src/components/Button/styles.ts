import styled from "styled-components";



export const Container = styled.button`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    border-radius: .25rem;
    background-color: #fff;
    color: #000;
    border: 0;
    font-size: 1rem;
    padding: 1rem 0;
    width: 200px;
    border: 1px solid #fff;

    @media (max-width: 991.98px) {
        width: 280px;
    }

    transition: ease .4s all;
    @media (min-width: 991.99px) {
        &:hover {
            background-color: transparent;
            border: #fff;
            color: #fff;
            border: 1px solid #fff;
        }
    }
    
    &.outline {
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.gray60};
        color: ${({ theme }) => theme.colors.gray60};

        @media (min-width: 991.99px) {
            &:hover {
                background-color: transparent;
                border: #fff;
                color: #fff;
                border: 1px solid #fff;
            }
        }
    }
`