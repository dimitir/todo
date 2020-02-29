import React from 'react';
import { TodoListPropsType } from './todoListContainer';
import { TodoItemType } from '../../store/RootStore/types';
import style from './todoList.module.scss';
import { Link } from "react-router-dom";




const TodoList: React.FC<TodoListPropsType> = ({ todoList, changeCompeted, deleteTodo }: TodoListPropsType) => {

    const showTodoList = () => {
        let todoItems: React.ReactNode;
        if (todoList.todoArr.length > 0) {
            todoItems = (todoList.todoArr as Array<TodoItemType>).slice().reverse().map((todo: TodoItemType, i: number) => {

                const classes = [style.todo];
                if (todo.completed) {
                    classes.push(style.complited)
                }
                return (
                    <li key={i} className={classes.join(' ')}>
                        <label>
                            <input type="checkbox" value={todo._id} checked={todo.completed} onChange={() => changeCompeted(todo._id)} />
                            <span>{todo.title}</span>
                        </label>
                        <div>
                            <Link className={style.editLink} to={{
                                pathname: '/edit',
                                search: `?id=${todo._id}`,
                            }} >
                                <i className={`material-icons ${style.todoIcon}`}>edit</i>
                            </Link>
                            <i className={`material-icons ${style.todoIcon}`} onClick={() => deleteTodo(todo._id)}>clear</i>
                        </div>
                    </li >
                )
            })
        }

        else {
            todoItems = <li className={style.titleEmptyTask}>You haven't tasks yet</li>;
        }

        return todoItems;

    }



    return (
        <>
            <ul className={style.todoListBox}>
                {showTodoList()}
            </ul>
        </>
    )
}


export default TodoList;