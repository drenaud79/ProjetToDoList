import NewToDo from "./newToDo";
import TodoListView from "./TodoListView";
import {useState} from "react"

const INITIAL_LIST = [
    {
      id: "e1",
      todo: "truc 1"
    },
    {
        id: "e2",
        todo: "truc 2"
    },
    {
        id: "e3",
        todo: "truc 3"
    },
    {
        id: "e4",
        todo: "truc 4"
    },
  ];

const TodoList = () => {

    const [todo, setTodo] = useState(INITIAL_LIST);

    return (
        <>
            <h1>TodoList</h1>
            <NewToDo />
            <TodoListView todo={todo} />
        </>
    )
}

export default TodoList