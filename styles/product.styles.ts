import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  &:active {
    color: black;
    background-color: white;
    box-shadow: inset 0px 0px 0px 1px #000;
  }
`;

export const ProductPicture = styled.div`
  display: flex;
  flex: 2;
  padding: 5rem;
  justify-content: center;
`;

export const ProductInfo = styled.div`
  flex: 2;
  padding-right: 15rem;
`;

export const BuySection = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Category = styled.span`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  &:hover {
    background: rgba(0, 0, 0, 0.35);
    transform: size(1.2);
  }
`;

export const Image = styled.img`
  height: 50vh;
  transition: all ease 0.5s 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Notes = styled.div`
  text-align: right;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.05rem;
  line-height: 0.6rem;
`;

export const Slider = styled.div`
  margin: 4rem 0;
`;

export const SliderTitle = styled.div`
  text-align: center;
`;
