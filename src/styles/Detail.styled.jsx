import styled from 'styled-components';

const DetailComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > article {
    min-width: 300px;
    min-height: 225px;
    border-radius: 10px;
    padding: 20px;
    background-color: lightcoral;
    color: white;
  }

  & > article > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > article > header > a {
    border-radius: 5px;
    padding: 5px;
    background-color: lightseagreen;
    color: white;
  }

  & > article > h2 {
    margin: 20px 0;
    font-size: 36px;
  }

  & > article > p {
    font-size: 20px;
  }
`;

export { DetailComponent };
