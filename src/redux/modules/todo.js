// Action Value
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const GET_PAGE_ID = "GET_PAGE_ID";

// Action Creator
export const createTodo = (payload) => {
  return { type: CREATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const updateTodo = (payload) => {
  return { type: UPDATE_TODO, payload }
}

export const getPageId = (payload) => {
  return { type: GET_PAGE_ID, payload }
}

// 초기 상태값
const initialState = {
  todo: [
    {
      id: 0,
      title: '',
      body: ''
    }
  ],
  todos: [
    {
      id: 0, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false
    },
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: false
    }
  ]
}

// Reducer - 변화를 일으키는 함수 = 리듀셔
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        )
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          (todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo 
        )
      };
    case GET_PAGE_ID:
      return {
        ...state,
        todo: state.todos.find((todo)=> todo.id === Number(action.payload))
        // 여기서 받아도는 action.payload는 ID 값인데, 문자열이기 때문에, todo.id는 숫자열이라서 Number()로 action.payload를 숫자열로 변경       
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
