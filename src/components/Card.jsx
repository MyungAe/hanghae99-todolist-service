import { useDispatch } from 'react-redux';
import {
  isnt_done_todo,
  is_done_todo,
  set_current_todo,
} from 'redux/modules/todoList';

function Card({ children }) {
  const dispatch = useDispatch();
  return (
    <>
      <article>
        <h2>{children.title}</h2>
        <p>{children.body}</p>
        <button
          onClick={() => {
            dispatch(isnt_done_todo(children.id - 1));
          }}
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            dispatch(is_done_todo(children.id - 1));
          }}
        >
          완료
        </button>
      </article>
      <button
        onClick={() => {
          dispatch(set_current_todo(children.id - 1));
        }}
      >
        상세보기
      </button>
    </>
  );
}

export default Card;
