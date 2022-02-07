import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 65%;
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  bottom: 15px;
  right: 15px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) => (props.isActive ? 'white' : 'black')};
  border: ${(props) => (props.isActive ? '1.5px solid black' : 'none')};
  opacity: 0.4;
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

export const Gradient = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Carousel = styled.div`
  height: 45vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
`;
