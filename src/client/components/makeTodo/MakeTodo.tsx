import React from 'react';
import { useForm } from "react-hook-form";
import { MakeTodoPropsType } from './MakeTodoContainer';
import style from './makeTodo.module.scss';
import TodoListContainer from '../todoList/todoListContainer';
import { FormData } from '../../store/RootStore/types';
var ObjectID = require("bson-objectid");



const TodoForm: React.FC<MakeTodoPropsType> = ({ addTodo }: MakeTodoPropsType) => {
    const { register, reset, handleSubmit, errors } = useForm<FormData>();
    const onSubmit = handleSubmit(({ todoTitle, todoDiscription }, e) => {
        const dataTodo = {
            _id: ObjectID(),
            title: todoTitle,
            discription: todoDiscription,
            completed: false
        };
        addTodo(dataTodo);
        reset({
            todoTitle: "",
            todoDiscription: ""
        });
    });

    return (
        <>

            <div className={`container ${style.inputBox}`}>
                <div className="row">
                    <form onSubmit={onSubmit} className={`col s12 `}>

                        <div className={` input-field col s9 ${style.inputTitleTodo}`} >
                            <input
                                placeholder="Title task"
                                ref={register({ required: true })}
                                name='todoTitle'
                                type="text" className="validate" />
                            {errors.todoTitle && 'Title todo is required'}
                        </div>

                        <div className="input-field col s12">
                            <textarea name='todoDiscription' ref={register}
                                placeholder="Discription"
                                className="materialize-textarea"></textarea>
                        </div>
                        <div className={`col s12 ${style.tododButton} `} >
                            <a className="waves-effect waves-light   indigo lighten-3 white-text btn" onClick={onSubmit}>Ok</a>
                        </div>
                    </form>
                </div>

            </div>
            <div className='container'>
                <TodoListContainer />
            </div>
        </>
    )
}

export default TodoForm;