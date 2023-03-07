import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  delete_todo,
  toggle_todo,
  set_current_todo,
} from 'redux/modules/todoList';
import { CardComponent } from 'styles/Card.styled';

function Card({ children }) {
  const dispatch = useDispatch();
  return (
    <>
      <CardComponent>
        <Link
          onClick={() => {
            dispatch(set_current_todo(children.id - 1));
          }}
          to={`/detail/${children.id}`}
        >
          상세보기
        </Link>
        <h2>{children.title}</h2>
        <p>{children.body}</p>
        <div>
          <button
            onClick={() => {
              dispatch(delete_todo(children.id));
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              dispatch(toggle_todo(children.id - 1));
            }}
          >
            {children.isDone ? '취소' : '완료'}
          </button>
        </div>
      </CardComponent>
    </>
  );
}

export default Card;
