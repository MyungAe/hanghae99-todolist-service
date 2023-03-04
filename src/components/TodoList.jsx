import Card from './Card';
import { useSelector } from 'react-redux';
import filterTodoList from 'utils/filterTodoList';

function TodoList() {
  const todoList = useSelector(state => state.todoList);

  const { isDoneArray, isntDoneArray } = filterTodoList(todoList);

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
            {todo.map(todoObject => {
              return (
                <Card
                  key={todoObject.id}
                  todo={todoObject}
                />
              );
            })}
          </section>
        );
      })}
    </>
  );
}

export default TodoList;
