import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DetailComponent = styled.article``;

function Detail() {
  const currentTodo = useSelector(state => state.todoList);

  return (
    <DetailComponent>
      <header>
        <div>ID : {currentTodo.id}</div>
        <button>이전으로</button>
      </header>
      <h2>{currentTodo.title}</h2>
      <p>{currentTodo.body}</p>
    </DetailComponent>
  );
}

export default Detail;
