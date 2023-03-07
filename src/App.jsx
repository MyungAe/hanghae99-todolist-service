import Header from 'components/Header';
import Form from 'components/Form';
import TodoList from 'components/TodoList';
import { ThemeProvider } from 'styled-components';
import { AppComponent } from 'styles/App.styled';

const theme = { colorPalette: {} };

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
