const initialState = {
  todoLists: [
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
  ],
  currentTodoLength: 4,
  currentTodoObject: null,
};

const ADD_TODO = 'ADD_TODO';
const IS_DONE_TODO = 'IS_DONE_TODO';
const ISNT_DONE_TODO = 'ISNT_DONE_TODO';
const SET_CURRENT_TODO = 'TODO_IS_THIS';

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

export const set_current_todo = id => {
  return {
    type: SET_CURRENT_TODO,
    payload: id,
  };
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, content } = action.payload;
      const newTodoObject = {
        id: ++state.currentTodoLength,
        title,
        body: content,
        isDone: false,
      };
      return Object.assign(state, {
        todolists: [...state.todoLists, newTodoObject],
      });
    case IS_DONE_TODO:
      state['todoLists'][action.payload]['isDone'] = true;
      return Object.assign(state);
    case ISNT_DONE_TODO:
      state['todoLists'][action.payload]['isDone'] = false;
      return Object.assign(state);
    case SET_CURRENT_TODO:
      return Object.assign(state, {
        currentTodoObject: state.todoLists[action.payload],
      });
    default:
      return state;
  }
};

export default todoListReducer;
