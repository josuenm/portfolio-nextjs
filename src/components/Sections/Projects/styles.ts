import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray60};
  max-width: 800px;
  margin-bottom: 5rem;

  span {
    color: #00ff19;
  }

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;
