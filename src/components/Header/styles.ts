import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 0.5rem 0;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid transparent;

  transition: ease 0.4s all;
  &.active {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
  }

  @media (max-width: 991.98px) {
    overflow: hidden;
    transition: ease 0.4s all;

    &[data-mobile="true"] {
      min-height: 110vh;
    }
  }
`;

export const ProjectHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray60};
  color: ${({ theme }) => theme.colors.gray60};
  background: transparent;
  padding: 0.3rem 2rem;
  border-radius: 0.25rem;

  transition: ease 0.4s all;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const MobileButton = styled.div`
  display: none;
  position: relative;
  width: 40px;
  height: 50px;

  @media (max-width: 991.98px) {
    display: block;
    z-index: 99;
  }

  &::before {
    content: "";
    position: absolute;
    top: 35%;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray50};
    border-radius: 3rem;
    transition: ease 0.4s all;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 35%;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray50};
    border-radius: 3rem;
    transition: ease 0.4s all;
  }

  &.active {
    &::before {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    &::after {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .logo {
    z-index: 99;
  }

  .link {
    color: ${({ theme }) => theme.colors.gray60};
    cursor: pointer;

    transition: ease 0.4s all;
    &:hover {
      color: #fff;
    }

    @media (max-width: 991.98px) {
      width: 100%;
      font-size: 2rem;
      line-height: 2rem;
      padding-left: 1rem;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 991.98px) {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    z-index: 1;

    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
    transition: ease 0.4s all;

    &.active {
      padding-top: 100px;
      top: 0;
      min-height: 100vh;
    }
  }
`;

export const Button = styled.button`
  border: 1px solid #fff;
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.7rem;
  color: #fff;
  border-radius: 0.25rem;

  @media (max-width: 991.98px) {
    align-self: flex-start;
    margin-left: 1rem;
    width: fit-content;
    height: fit-content;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray60};
    border: 1px solid ${({ theme }) => theme.colors.gray60};
  }

  @media (min-width: 991.99px) {
    transition: ease 0.4s all;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
