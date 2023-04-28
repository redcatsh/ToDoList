import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
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

export function TodoProvider({ children }) {
  // 데이터 localStorage에 저장
  const KEY = "todos"; // Local Storage에 저장될 key 변수 할당
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const todos = JSON.parse(localStorage.getItem(KEY)); // JSON.parse()해주면 문자 데이터가 js에서 가공하여 사용할 수 있는 데이터로 변환
    return todos ? todos : [];
  });
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state)); // JSON.stringify()해서 문자 데이터로 저장
  }, [state]);

  // 다크모드 localStorage에 저장하기!
  const MODE = "mode";
  JSON.parse(localStorage.getItem(MODE));
  const [darkmode, setDarkmode] = useState(() =>
    JSON.parse(localStorage.getItem(MODE))
  );
  const toggleDarkMode = () => {
    setDarkmode((mode) => !mode);
  };
  useEffect(() => {
    localStorage.setItem(MODE, JSON.stringify(darkmode));
  }, [darkmode]);

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          {children}
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
