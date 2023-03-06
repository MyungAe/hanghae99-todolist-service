import React from 'react';

function Detail({ todo }) {
  return (
    <article>
      <header>
        <div>ID : {todo.id}</div>
        <button>이전으로</button>
      </header>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
    </article>
  );
}

export default Detail;
