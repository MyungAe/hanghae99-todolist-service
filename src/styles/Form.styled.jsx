import styled from 'styled-components';

const FormComponent = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  background-color: lightgrey;
  padding: 30px;

  div label,
  div input {
    margin-right: 10px;
  }

  div > label {
    font-weight: bold;
  }

  div input {
    border: 0;
    border-radius: 5px;
    padding: 5px;
  }

  & > input {
    border: 0px;
    padding: 10px;
    border-radius: 10px;
    color: white;
    background-color: blueviolet;
  }
`;

export { FormComponent };
