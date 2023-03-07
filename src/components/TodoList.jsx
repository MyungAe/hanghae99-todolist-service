import Card from './Card';
import { useSelector } from 'react-redux';
import filterTodoList from 'utils/filterTodoList';

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
          <section key={title}>
            {title}
            <ul>
              {todo.map(todoObject => {
                return (
                  <li key={todoObject.id}>
                    <Card>{todoObject}</Card>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}

export default TodoList;
