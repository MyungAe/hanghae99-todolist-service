const initialState = [
  {
    id: 1,
    title: '리액트 강의보기',
    body: '챕터 1부터 챕터 12까지 학습',
    isDone: false,
  },
  {
    id: 2,
    title: '점심 먹기',
    body: '점심 뭐먹지..?',
    isDone: true,
  },
  {
    id: 3,
    title: '리덕스 강의보기',
    body: '챕터 13부터 챕터 24까지 학습',
    isDone: false,
  },
  {
    id: 4,
    title: '저녁 먹기',
    body: '저녁.... 뭐먹지..?',
    isDone: true,
  },
];

const ADD_TODO = 'ADD_TODO';
const IS_DONE_TODO = 'IS_DONE_TODO';
const ISNT_DONE_TODO = 'ISNT_DONE_TODO';

export const add_todo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const is_done_todo = id => {
  return {
    type: IS_DONE_TODO,
    payload: id,
  };
};

export const isnt_done_todo = id => {
  return {
    type: ISNT_DONE_TODO,
    payload: id,
  };
};

let currentId = 4;

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, content } = action.payload;
      const newTodoObject = {
        id: ++currentId,
        title,
        body: content,
        isDone: false,
      };
      return [...state, newTodoObject];
    case IS_DONE_TODO:
      state[action.payload]['isDone'] = true;
      return [...state];
    case ISNT_DONE_TODO:
      state[action.payload]['isDone'] = false;
      return [...state];
    default:
      return state;
  }
};

export default todoListReducer;
