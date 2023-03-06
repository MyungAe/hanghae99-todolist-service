import { useDispatch } from 'react-redux';
import { isnt_done_todo, is_done_todo } from 'redux/modules/todoList';
import Detail from './Detail';

function Card({ todo }) {
  const dispatch = useDispatch();
  return (
    <>
      <article>
        <h2>{todo.title}</h2>
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
      <Detail todo={todo} />
    </>
  );
}

export default Card;
