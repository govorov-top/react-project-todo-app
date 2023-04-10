import {RiDeleteBinLine, RiRefreshLine} from 'react-icons/ri';
import Button from "../UI/Button";
import styles from './TodosAction.module.css'

const Todos = ({completedTodosExist,resetTodos,deleteTodos}) => {
    return(
        <div className={styles.btnContainer}>
            <Button onClick={resetTodos} title="Reset todos">
                <RiRefreshLine/>
            </Button>
            <Button onClick={deleteTodos} title="Delete completed todos" disabled={!completedTodosExist}>
                <RiDeleteBinLine/>
            </Button>
        </div>
    )
}
export default Todos;