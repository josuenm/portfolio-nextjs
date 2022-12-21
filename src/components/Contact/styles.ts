import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 2rem 1.5rem;
  max-width: 350px;
  width: 100%;
  border-radius: 0.5rem;
  background-color: #101010;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 0.5rem 0.8rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue40};
  }
`;

export const Submit = styled.input.attrs({
  type: "submit",
})`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue40};
  color: #fff;
  border: 0;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  transition: ease 0.4s opacity;
  &:hover {
    opacity: 0.7;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.3;
  }
`;

export const Cancel = styled.button.attrs({
  type: "button",
})`
  color: ${({ theme }) => theme.colors.blue40};
  background-color: transparent;

  width: 100%;
  border: 0;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  transition: ease 0.4s background-color;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue40rgba(0.2)};
  }
`;

export const Spinner = styled.div`
  width: 35px;
  height: 35px;

  border-top: 2px solid ${({ theme }) => theme.colors.blue40};
  border-left: 2px solid ${({ theme }) => theme.colors.blue40};
  border-radius: 50%;

  margin: 0 auto;

  animation: spinner-anime 0.5s linear infinite;
  @keyframes spinner-anime {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(390deg);
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: #fc3426;
`;

export const FormSent = styled.div`
  background-color: #75ff9a;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  max-width: 450px;
  width: 100%;
  border-radius: 0.25rem;
  padding: 1rem;

  @media (max-width: 991.98px) {
    width: 90%;
  }
`;

export const FormSentMessage = styled.div`
  text-align: center;
  color: #004a14;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
