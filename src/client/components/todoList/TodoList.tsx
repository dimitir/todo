import React from 'react';
import { TodoListPropsType } from './todoListContainer';
import { TodoItemType } from '../../store/types';
import style from './todoList.module.scss';




const TodoList: React.FC<TodoListPropsType> = ({ todoList }: TodoListPropsType) => {

    console.log(todoList);



    const showTodoList = () => {
        let todoItems: React.ReactNode;
        if (todoList.todoArr.length > 0) {

            todoItems = (todoList.todoArr as Array<TodoItemType>).map((todo: TodoItemType, i: number, arr: Array<TodoItemType>) => {
                return (
                    <li key={i} className={style.todo}>
                        <label>
                            <input type="checkbox" value={todo.id} />
                            <span>{todo.title}</span>
                        </label>
                        <div>
                            <i className="material-icons">edit</i>
                            <i className="material-icons">clear</i>
                        </div>
                    </li>
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