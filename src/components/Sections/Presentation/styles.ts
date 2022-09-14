import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  margin-top: 0 !important;
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const Title = styled.p`
  font-size: 12rem;
  color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 575.98px) {
    font-size: 4rem;
  }

  @media (min-width: 575.99px) and (max-width: 991.98px) {
    font-size: 8rem;
  }

  &.first-gradient {
    background: linear-gradient(
      90deg,
      #0029ff,
      #00ffff,
      #fff,
      #fff,
      #00ffff,
      #0029ff
    );
    background-size: 400%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: FirstGradientAnime 20s linear infinite;
    @keyframes FirstGradientAnime {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 400%;
      }
    }
  }

  &.second-gradient {
    background: linear-gradient(
      90deg,
      #fff,
      #fff,
      #0029ff,
      #00ffff,
      #fff,
      #fff
    );
    background-size: 400%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: SecondGradientAnime 20s linear infinite;
    @keyframes SecondGradientAnime {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 400%;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @media (max-width: 991.98px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Description = styled.p`
  margin-top: 100px;
  max-width: 700px;
  font-size: 0.95rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray60};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
