import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  background: white;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  z-index: 1000;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: black;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: inline-block;
  padding: 0 2rem;
`;

export const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export const RightBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.5rem;
  cursor: pointer;
`;

export const Icon = styled.div`
  padding: 0 0.7rem;
`;

export const Searchbar = styled.input`
  height: 2rem;
  border: 1px solid lightgrey;
  border-radius: none;
  width: 10rem;
  padding: 0.5rem;
  margin-right: auto;
`;

export const CartCount = styled.span`
  padding-left: 0.5rem;
`;

export const Cart = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SwitchSection = styled.div`
  padding-left: 0.5rem;
`;
