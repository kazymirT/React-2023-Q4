import styled from 'styled-components';

type DetailsContainerProps = {
  hidden: boolean;
};

export const DetailsContainer = styled.div<DetailsContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.hidden ? '50%' : '0%')};
`;
