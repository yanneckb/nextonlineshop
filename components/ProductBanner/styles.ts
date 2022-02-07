import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
  margin: 0;
  width: 100%;
`;

export const Slider = styled.div`
  padding: 1.5rem 0;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
`;

export const Slide = styled.div`
  white-space: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  margin: 0 1.5rem;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 7rem;
  margin: 0 6rem;
  transition: all ease 0.5s 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Info = styled.div``;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  &:active {
    color: black;
    background-color: white;
    box-shadow: inset 0px 0px 0px 1px #000;
  }
`;

export const Price = styled.h2`
  font-size: 1.5rem;
`;

export const Title = styled.p``;

export const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
`;

export const MoreText = styled.div``;

export const MoreLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background: black;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
`;
