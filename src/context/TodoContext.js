import React, { createContext, useContext, useReducer } from "react";

export const initialTodos = [
  {
    id: 1,
    contents: "쇼핑 하러 가기",
    done: true,
  },
  {
    id: 2,
    contents: "벚꽃 구경 가기",
    done: true,
  },
  {
    id: 3,
    contents: "코딩 공부 하기",
    done: false,
  },
  {
    id: 4,
    contents: "이력서 쓰기",
    done: false,
  },
];

export default function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo); // 여기서 todo는 initialTodos안의 항목들임!
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw Error(`알 수 없는 액션 타입: ${action.type}`);
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw Error("Cannot find TodoProvider");
  }
  return context;
}
