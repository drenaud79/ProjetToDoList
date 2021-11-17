import NewToDo from "./newToDo";
import TodoListView from "./TodoListView";
import {useState, useReducer, useEffect} from "react"
import {UseReducerList} from '../components/useReducerList';

/*
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
  ];*/

  

  
let url = "https://cat-todo-list.herokuapp.com/todos"
let initialState = [{
    id: "e1",
    content: "truc 1"
  }];

const TodoList = () => {

    //const [todo, setTodo] = useState(INITIAL_LIST);

    // Utilisation du reducer
    const [state, dispatch] = useReducer(UseReducerList, initialState);


    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
        const time = setTimeout(() => {
            initialState = data
        }, 2000);
        });
    }, [])

    const DeleteHandler = (id) => {
        console.log(id);
        //ToDo use reducer
    }

    return (
        <>
            <h1>TodoList</h1>
            <NewToDo />
            <TodoListView onDeleteItem={DeleteHandler} todo={state} />
        </>
    )
}

export default TodoList