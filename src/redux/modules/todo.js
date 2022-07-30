const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

// 초기 상태값
const initialState = {
  inputs: [{
    id: 0,
    title: "초기 설정 제목",
    body: "초기 설정 내용"
  }]
  
};

// 리듀서
const inputs = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        inputs: [...state.inputs, action.payload]
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default inputs;
