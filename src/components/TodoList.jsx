import Card from './Card';
import { useSelector } from 'react-redux';

// 한 번에 두 개의 컴포넌트를 렌더할 수 있을까?
// map 함수 한 번 사용해서 working 리스트 렌더해보기
function TodoList() {
  const todoList = useSelector(state => state.todoList);

  const filterTodoList = (list, condition) => {
    const contidionTrueArray = [];
    const contidionFalseArray = [];

    list.forEach(object => {
      if (object.isDone) contidionTrueArray.push(object);
      if (!object.isDone) contidionFalseArray.push(object);
    });

    if (condition) {
      return contidionTrueArray;
    }

    if (!condition) {
      return contidionFalseArray;
    }
  };

  return (
    <>
      <section>
        Working.. 🔥
        {filterTodoList(todoList, false).map(todo => (
          <Card
            key={todo.id}
            todo={todo}
          />
        ))}
      </section>
      <section>
        Done..! 🎉
        {filterTodoList(todoList, true).map(todo => (
          <Card
            key={todo.id}
            todo={todo}
          />
        ))}
      </section>
    </>
  );
}

export default TodoList;
