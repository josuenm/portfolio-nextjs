import styled from "styled-components";





export const Container = styled.footer`
    width: 100%;
    background: #101010;
    border-top: 1px solid ${({ theme }) => theme.colors.gray50};
    padding: 2rem 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`




export const Warning = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray60};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: .9rem;
`