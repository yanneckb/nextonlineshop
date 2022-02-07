import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
`;

export const Product = styled.div`
  width: 20rem;
  height: 25rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 1rem;
  padding: 0.75rem 1rem;
  border: 0.1rem solid lightgrey;
`;

export const Title = styled.h1`
  font-size: 1rem;
  cursor: pointer;
`;

export const Icon = styled.div``;

export const Price = styled.p`
  color: black;
`;

export const Image = styled.img`
  height: 7rem;
  transition: all ease 0.5s 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  &:active {
    color: black;
    background-color: white;
    box-shadow: inset 0px 0px 0px 1px #000;
  }
`;

export const TopContainer = styled.div`
  flex: 2;
  padding: 2rem;
`;

export const BottomContainer = styled.div`
  flex: 1;
  padding-bottom: 0.75rem;
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 0.5rem;
`;
