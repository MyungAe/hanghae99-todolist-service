import styled from 'styled-components';

const TodoListComponent = styled.section`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 15px 20px;

  & > h2 {
    margin-bottom: 20px;
  }
`;

const TodoListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export { TodoListComponent, TodoListUl };
