import React from 'react';
import { TodoListPropsType } from './todoListContainer';

const TodoList: React.FC<TodoListPropsType> = ({ todoList }: TodoListPropsType) => {
    console.log(todoList);
    return (
        <>
            <form action="#">
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>Red</span>
                    </label>
                </p>
            </form>

        </>
    )
}

export default TodoList;