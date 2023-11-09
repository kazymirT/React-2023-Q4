import styled from 'styled-components';

export const DetailsContainer = styled.div`
  position: relative;
  padding: 32px;
  width: 470px;
  display: flex;
  flex-direction: column;
  background-color: rgb(28, 28, 28);
  border-radius: 7px;
  height: 100%;
`;
export const DetailsItem = styled.div`
  right: 120px;
  top: 204px;
  overflow: hidden;
  max-width: 390px;
`;
export const ProductImages = styled.img`
  width: 390px;
  height: 300px;
  border-radius: 7px;
`;
export const DetailsTitle = styled.h2`
  text-align: center;
  color: rgb(181, 168, 145);
`;
