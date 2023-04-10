import styles from './Todo.module.scss'
import {RiTodoFill, RiCheckLine, RiDeleteBinLine} from 'react-icons/ri';

const Todo = ({todo, deleteTodo, toggleTodo}) => {
    return(
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBinLine className={styles.deleteIcon} onClick={()=> deleteTodo(todo.id)}/>
            <RiCheckLine className={styles.checkIcon} onClick={()=> toggleTodo(todo.id)}/>
        </div>
    )
}
export default Todo;