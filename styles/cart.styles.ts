import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 20vw;
`;

export const Cart = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Items = styled.div`
  width: 40rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0.75rem 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 1.5px 1.5px 4px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
  width: 4rem;
  transition: all ease 0.5s 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const TotalCart = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 1.5px 1.5px 4px rgba(0, 0, 0, 0.15);
  width: 25rem;
  background: white;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalTitle = styled.h2`
  margin: 0 0 4rem 0;
`;

export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.4);
`;

export const ShippingText = styled.p`
  margin: 0;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.h2`
  margin: 0;
`;

export const Button = styled.button`
  background: black;
  border: none;
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  cursor: pointer;
`;

export const BuyButton = styled.button`
  background: black;
  border: none;
  margin-top: 2rem;
  width: 100%;
  height: 2.5rem;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  &:before {
    content: '👉';
    padding-right: 0.6rem;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const ItemTitle = styled.div`
  width: 20rem;
`;

export const InfoContainer = styled.div`
  width: 6rem;
  text-align: right;
`;

export const Sidebar = styled.div``;

export const ShoppingInfo = styled.div``;

export const PaymentContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const PaymentSvg = styled.img`
  height: 3.5rem;
  padding: 0.3rem;
`;
