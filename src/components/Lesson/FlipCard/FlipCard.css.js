import styled from "styled-components";

export const CardHolder = styled.div`
  width: 220px;
  height: 300px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 30px;
  margin: 15px;
`;

export const CardElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;
