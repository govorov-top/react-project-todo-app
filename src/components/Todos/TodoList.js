import Todo from "./Todo";
import './TodoList.module.css'
const TodoList = ({todos,deleteTodo,toggleTodo}) => {
    return(
        <>
            {
                todos.length >= 1 ? todos.map((todo) =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ) : <h2>Todo list is empty!</h2>
            }
        </>
    )
}
export default TodoList;