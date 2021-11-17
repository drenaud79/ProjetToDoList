import Todo from '../components/Todo'


const TodoListView = (props) => {
   
    const DeleteHandler = (id) => {
        console.log(id);
        props.onDeleteItem(id);
    }

    return (
        <>
            <ul>
            {props.todo.map((t) => (
                <Todo onDeleteItem={DeleteHandler}
                key={t.id}
                id={t.id}
                todo={t.todo}
                />
            ))}
            </ul>
        </>
    )
}


export default TodoListView