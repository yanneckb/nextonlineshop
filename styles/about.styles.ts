import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 57.5vh 0;
`;

export const ContactForm = styled.form`
  width: 45vw;
  padding: 2rem;
`;

export const TextInput = styled.input`
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const TextField = styled.textarea`
  width: 100%;
  height: 20vh;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  color: white;
  background: black;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;

export const Contacts = styled.div`
  margin-bottom: 5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 2rem;
`;

export const Label = styled.label``;

export const HeadTitle = styled.h1`
  margin: 2rem 0;
`;

export const Title = styled.h1`
  margin: 0.5rem 0;
`;

export const Subtitle = styled.h3`
  margin: 1rem 0 0 0;
`;

export const Text = styled.p`
  margin: 0;
`;
