import React from 'react';
import { TodoListPropsType } from './todoListContainer';
import { TodoItemType } from '../../store/types';
import style from './todoList.module.scss';
import { Link, NavLink  } from "react-router-dom";




const TodoList: React.FC<TodoListPropsType> = ({ todoList, changeCompeted, deleteTodo }: TodoListPropsType) => {

    console.log(todoList);

    const showTodoList = () => {
        let todoItems: React.ReactNode;
        if (todoList.todoArr.length > 0) {
            todoItems = (todoList.todoArr as Array<TodoItemType>).map((todo: TodoItemType, i: number) => {

                const classes = [style.todo];
                if (todo.completed) {
                    classes.push(style.complited)
                }
                return (
                    <li key={i} className={classes.join(' ')}>
                        <label>
                            <input type="checkbox" value={todo.id} checked={todo.completed} onChange={() => changeCompeted(todo.id)} />
                            <span>{todo.title}</span>
                        </label>
                        <div>
                            <Link className={style.editLink} to={{
                                pathname: '/edit',
                                search: `?id=${todo.id}`,
                            }} >
                                <i className={`material-icons ${style.todoIcon}`}>edit</i>
                            </Link>
                            <i className={`material-icons ${style.todoIcon}`} onClick={() => deleteTodo(todo.id)}>clear</i>
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