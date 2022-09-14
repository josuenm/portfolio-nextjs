import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  span {
    color: ${({ theme }) => theme.colors.blue40};
  }
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 10%;
  margin-bottom: 1.5rem;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.gray60};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 991.98px) {
    font-size: 1.1rem;
  }
`;

export const MainDescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 10%;
  padding-bottom: 8rem;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 300px;
`;

export const Modal = styled(Image)``;

export const InfoSet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const InfoTitle = styled.h3`
  color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.3rem;

  @media (max-width: 991.98px) {
    font-size: 1.9rem;
  }
`;

export const InfoDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray60};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 991.98px) {
    font-size: 1.1rem;
  }
`;
