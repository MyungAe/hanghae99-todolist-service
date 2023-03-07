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
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_CURRENT_TODO = 'TODO_IS_THIS';

export const add_todo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const toggle_todo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const delete_todo = id => {
  return {
    type: DELETE_TODO,
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
  let todoLists = state['todoLists'];
  let currentTodoLength = state['currentTodoLength'];

  switch (action.type) {
    case ADD_TODO:
      const { title, content } = action.payload;
      const newTodoObject = {
        id: ++currentTodoLength,
        title,
        body: content,
        isDone: false,
      };
      return {
        ...state,
        todoLists: [...todoLists, newTodoObject],
        currentTodoLength: currentTodoLength,
      };
    case TOGGLE_TODO:
      const index = action.payload;
      todoLists[index]['isDone'] = !todoLists[index]['isDone'];
      return { ...state };
    case DELETE_TODO:
      todoLists = todoLists.filter(object => {
        return object['id'] !== action.payload;
      });
      return { ...state, todoLists };
    case SET_CURRENT_TODO:
      const findTodo = todoLists.filter(todo => {
        return todo.id === action.payload;
      });
      return { ...state, currentTodoObject: findTodo[0] };
    default:
      return state;
  }
};

export default todoListReducer;
