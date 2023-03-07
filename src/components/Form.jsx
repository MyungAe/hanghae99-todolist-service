import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_todo } from 'redux/modules/todoList';
import { FormComponent } from 'styles/Form.styled';

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  return (
    <FormComponent>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={event => setContent(event.target.value)}
          required
        />
      </div>
      <input
        type="submit"
        value="추가하기"
        onClick={event => {
          event.preventDefault();
          dispatch(add_todo({ title, content }));
          setTitle('');
          setContent('');
        }}
      />
    </FormComponent>
  );
}
export default Form;
