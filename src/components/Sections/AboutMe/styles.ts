import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray50};

  #Container {
    margin: 5rem auto;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;

  @media screen and (max-width: 991.98px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray60};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.rose40};
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.gray60};
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  border-radius: 0.5rem;
  overflow: hidden;

  @media screen and (max-width: 575.98px) {
    width: 100%;
    height: 350px;
  }
`;

export const ProfileImage = styled(Image)`
  filter: grayscale(100%);
`;
