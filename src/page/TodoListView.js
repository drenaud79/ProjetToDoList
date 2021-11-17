import Todo from '../components/todo'


const TodoListView = (props) => {
    console.log(props)
    return (
        <>
            <ul>
            {props.todo.map((t) => (
                <Todo
                key={t.id}
                todo={t.todo}
                />
            ))}
            </ul>
        </>
    )
}


export default TodoListView