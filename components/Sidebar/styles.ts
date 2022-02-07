import styled from 'styled-components';

export const Wrapper = styled.div``;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.a`
  &:before {
    content: '👉';
    padding-right: 1rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  }
  padding: 0.3rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
