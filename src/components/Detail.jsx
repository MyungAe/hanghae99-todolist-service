import React from 'react';
import { useSelector } from 'react-redux';

function Detail() {
  const currentTodo = useSelector(state => state.todoList);
  console.log(currentTodo.currentTodoObject);
  return (
    <article>
      <header>
        <div>ID : {currentTodo.id}</div>
        <button>이전으로</button>
      </header>
      <h2>{currentTodo.title}</h2>
      <p>{currentTodo.body}</p>
    </article>
  );
}

export default Detail;
