import styled from 'styled-components';

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 10px;

  h1,
  p {
    font-size: 18px;
  }

  h1 {
    font-weight: bold;
  }
`;

export { HeaderComponent };
