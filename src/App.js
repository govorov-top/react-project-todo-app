import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.scss';
import TodoForm from './components/Todos/TodoForm';
import TodoList from "./components/Todos/TodoList";
import TodosAction from "./components/Todos/TodosAction";

function App() {
    const [todos, setTodos] = useState([]);
    function addTodoHandler(todoText) {
        const newTodo = {
            id: uuidv4(),
            text: todoText,
            isCompleted: false
        }
        setTodos([...todos, newTodo]);
    }
    function toggleTodoHandler(id) {
        setTodos(todos.map(todo => todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : {...todo}
        ));
    }
    function deleteTodoHandler(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    function resetTodosHandler() {
        const isAgree = window.confirm("Are you sure?");
        if (isAgree)
            setTodos([]);
    }
    function deleteTodosHandler() {
        const isAgree = window.confirm("Are you sure?");
        if (isAgree)
            setTodos(todos.filter((todo) => !todo.isCompleted));
    }
    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
    console.log(styles)
    return (
        <div className={styles.appContainer}>
            <h1 className={styles.appTitle}>Todo APP</h1>
            <TodoForm addTodo={addTodoHandler}/>
            {
                !!todos.length &&
                <TodosAction completedTodosExist={!!completedTodosCount}  resetTodos={resetTodosHandler} deleteTodos={deleteTodosHandler}/>
            }
            {
                completedTodosCount > 0 &&
                <p className={styles.completedTodosCount}>
                    You have completed {completedTodosCount} {completedTodosCount > 1 ? 'todos' : 'todo'}!
                </p>
            }
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
        </div>
    );
}

export default App;
