import {useState} from "react";
import styles from './TodoForm.module.scss'
import Button from "../UI/Button";

const TodoForm = (props) => {
    const [inputChange, setInputChange] = useState('');
    function onSubmitHandler(e){
        e.preventDefault();
        if (inputChange.length > 3){
            props.addTodo(inputChange);
            setInputChange('');
        }else {
            alert('Минимум 3 символа!')
        }
    }

    return(
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={e => {setInputChange(e.target.value)}} value={inputChange}/>
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    )
}
export default TodoForm;