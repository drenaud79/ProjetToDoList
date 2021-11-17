const Todo = (props) => {

    const deleteHandler = (items) => {
        console.log(items)
        console.log(props)
        props.onDeleteItem(props.id);
    }

    return (
        <>
            <li>{props.content} - 
            <button onClick={deleteHandler}>
                <img src="../trash.svg" alt="" width="16" height="16" />
            </button>    
            </li>
        </>
    )
}

export default Todo;