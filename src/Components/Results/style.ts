import styled from 'styled-components';
type ResultsContainerProps = {
  hidden: boolean;
};
export const ResultsContainer = styled.div<ResultsContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.hidden ? '50%' : '100%')};
`;
export const PageControls = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Items = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
