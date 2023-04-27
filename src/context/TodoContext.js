import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";

export const initialTodos = [
  {
    id: 0,
    contents: "투두 리스트 작성하기!",
    done: false,
    status: "active",
  },
];

export default function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    // 여기서 todo는 initialTodos안의 항목들임!

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
              status: todo.done === true ? "active" : "completed",
            }
          : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw Error(`알 수 없는 액션 타입: ${action.type}`);
  }
}

export const DarkModeContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(1);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw Error("Cannot find TodoProvider");
  }
  return context;
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

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
