import styled from 'styled-components';

export const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 3px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.5);
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  animation: rotation 0.8s ease infinite;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
