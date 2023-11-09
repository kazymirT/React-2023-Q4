import styled from 'styled-components';

export const SearchDiv = styled.div`
  padding: 40px 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  margin-right: 5px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.type === 'reset' ? 'yellow' : 'red')};
  &:hover {
    background-color: ${(props) =>
      props.type === 'reset' ? 'lightyellow' : 'lightcoral'};
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 15px;
  margin-right: 25px;
  border-radius: 10px;
  outline: none;
  border: 5px solid;
  border-color: ${(props) =>
    typeof props.value === 'string' && props.value.length > 0
      ? 'green'
      : 'gray'};
`;
