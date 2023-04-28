import { useState } from "react";
import Create from "./components/Create";
import Head from "./components/Head";
import List from "./components/List";
import Template from "./components/Template";
import { TodoProvider } from "./context/TodoContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <TodoProvider>
        <Template>
          <Head filters={filters} filter={filter} onFilterChange={setFilter} />
          <List filter={filter} />
          <Create />
        </Template>
      </TodoProvider>
    </>
  );
}

export default App;
