import styled from 'styled-components';

const CardComponent = styled.article`
  border: 3px solid lightcoral;
  border-radius: 10px;
  padding: 20px;
  margin-right: 10px;
  min-width: 200px;
  min-height: 150px;

  & > h2 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  & > p {
    margin-bottom: 15px;
  }

  & > div button {
    margin-right: 20px;
    background-color: lightseagreen;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  & > div button:hover {
    cursor: pointer;
  }
`;

export { CardComponent };
