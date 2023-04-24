import Create from "./components/Create";
import Head from "./components/Head";
import List from "./components/List";
import Template from "./components/Template";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Template>
        <Head />
        <List />
        <Create />
      </Template>
    </TodoProvider>
  );
}

export default App;
