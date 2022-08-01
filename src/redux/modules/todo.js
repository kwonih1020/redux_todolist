const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
export const createTodo = (payload) => {
  return { type: CREATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

// 초기 상태값
const initialState = {
  todos: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: false
    }
  ]
}

// 변화를 일으키는 함수 = 리듀셔
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
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
