import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DetailComponent } from 'styles/Detail.styled';

function Detail() {
  const { currentTodoObject } = useSelector(state => state.todoList);

  return (
    <>
      {currentTodoObject ? (
        <DetailComponent>
          <article>
            <header>
              <div>ID : {currentTodoObject.id}</div>
              <Link to="/">이전으로</Link>
            </header>
            <h2>{currentTodoObject.title}</h2>
            <p>{currentTodoObject.body}</p>
          </article>
        </DetailComponent>
      ) : (
        <div>잘못된 접근입니다.</div>
      )}
    </>
  );
}

export default Detail;
