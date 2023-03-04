import { useDispatch } from 'react-redux';
import { isnt_done_todo, is_done_todo } from 'redux/modules/todoList';

function Card({ todo }) {
  const dispatch = useDispatch();

  console.log(todo);
  return (
    <>
      <article>
        <h1>{todo.title}</h1>
        <p>{todo.body}</p>
        <button
          onClick={() => {
            dispatch(isnt_done_todo(todo.id - 1));
          }}
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            dispatch(is_done_todo(todo.id - 1));
          }}
        >
          완료
        </button>
      </article>
    </>
  );
}

export default Card;
