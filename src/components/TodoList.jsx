import Card from './Card';
import { useSelector } from 'react-redux';
import filterTodoList from 'utils/filterTodoList';
import { TodoListComponent, TodoListUl } from 'styles/TodoList.styled';

function TodoList() {
  const todoList = useSelector(state => state.todoList);

  const { isDoneArray, isntDoneArray } = filterTodoList(todoList.todoLists);

  const renderTarget = [
    {
      title: 'Working.. 🔥',
      todo: isntDoneArray,
    },
    {
      title: 'Done..! 🎉',
      todo: isDoneArray,
    },
  ];

  return (
    <>
      {renderTarget.map(({ title, todo }) => {
        return (
          <TodoListComponent key={title}>
            <h2>{title}</h2>
            <TodoListUl>
              {todo.map(todoObject => {
                return (
                  <li key={todoObject.id}>
                    <Card>{todoObject}</Card>
                  </li>
                );
              })}
            </TodoListUl>
          </TodoListComponent>
        );
      })}
    </>
  );
}

export default TodoList;
