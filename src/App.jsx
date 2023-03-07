import Header from 'components/Header';
import Form from 'components/Form';
import TodoList from 'components/TodoList';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

const theme = { colorPalette: {} };

const AppComponent = styled.main`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppComponent>
          <Header />
          <Form />
          <TodoList />
        </AppComponent>
      </ThemeProvider>
    </>
  );
}

export default App;
