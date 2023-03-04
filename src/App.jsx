import Header from 'components/Header';
import Form from 'components/Form';
import TodoList from 'components/TodoList';

function App() {
  // const makeTodo = useSelector(state => state.makeTodo);

  return (
    <>
      <Header />
      <Form />
      <TodoList />
    </>
  );
}

export default App;
