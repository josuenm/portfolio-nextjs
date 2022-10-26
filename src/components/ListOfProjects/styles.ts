import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  #Container {
    display: flex;
  }
`;

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5rem 0;
  padding-right: 4rem;

  @media (max-width: 767.98px) {
    padding-right: 0;
    width: 35px;
  }
`;

export const InfoContent = styled.div`
  position: sticky;
  top: 15rem;

  @media (max-width: 767.98px) {
    top: 1rem;
    transform: translate(115px, 240px) rotate(-90deg);
    display: flex;
    gap: 0.5rem;
  }
`;

export const InfoSubtitle = styled.h3`
  background: #00ff19;
  background: linear-gradient(
    90deg,
    #00ff19,
    #ffa800,
    #00ff19,
    #00ff19,
    #ffa800,
    #00ff19
  );
  background-size: 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;

  @media (max-width: 767.98px) {
    order: 1;
    font-size: 1.1rem;
  }

  @media (min-width: 767.99px) and (max-width: 991.98px) {
    font-size: 1.2rem;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 3rem;

  @media (max-width: 767.98px) {
    font-size: 1.1rem;
  }

  @media (min-width: 767.99px) and (max-width: 991.98px) {
    font-size: 1.8rem;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 5rem 0;
  padding-left: 4rem;

  @media (min-width: 767.99px) and (max-width: 991.98px) {
    padding-left: 1rem;
  }

  @media (max-width: 767.98px) {
    padding-left: 1rem;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.colors.gray50};
  }
`;

export const Project = styled.div`
  position: relative;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 767.98px) {
    width: 100%;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

export const IsFreelanceContainer = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  z-index: 2;
  padding: 0.25rem 1rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: #101f15;
`;

export const IsFreelanceTitle = styled.span`
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: #9ae6b4;
`;

export const EmptyOption = styled.p`
  font-size: 0.9rem;
  color: #9ae6b4;
`;

export const ProjectImageContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  position: relative;

  width: 100%;
  height: 250px;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #454545;

  @media (max-width: 400.98px) {
    width: 100%;
    height: 150px;
  }

  @media (min-width: 400.99px) and (max-width: 767.98px) {
    width: 100%;
    height: 250px;
  }
`;

export const ProjectImage = styled(Image)``;

export const ProjectTitle = styled.h4`
  font-size: 1.6rem;
`;

export const ProjectDescription = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const BadgeContainer = styled.div`
  background-color: rgba(154, 230, 180, 0.16);
  padding: 0.2rem 0.6rem;
  border-radius: 0.25rem;
`;

export const BadgeTitle = styled.span`
  color: #9ae6b4;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1rem;

  @media (max-width: 767.98px) {
    gap: 0.9rem;
  }
`;

export const ProjectInfoOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 10px;
  word-break: break-all;
`;

export const ProjectInfoOptionTitle = styled.span``;

export const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
