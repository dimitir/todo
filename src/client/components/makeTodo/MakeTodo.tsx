import React from 'react';
import { useForm } from "react-hook-form";
import { MakeTodoPropsType } from './MakeTodoContainer';
import style from './makeTodo.module.scss';
import TodoListContainer from '../todoList/todoListContainer';


type FormData = {
    todoTitle: string;
    todoDiscription: string;
};

const TodoForm: React.FC<MakeTodoPropsType> = ({ addTodo }: MakeTodoPropsType) => {
    const { register, reset, handleSubmit, errors } = useForm<FormData>();
    const onSubmit = handleSubmit(({ todoTitle, todoDiscription }, e) => {
        const dataTodo = { title: todoTitle, discription: todoDiscription };
        console.log(dataTodo);
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

                        <div className="input-field col s9  ">
                            <input ref={register} id="setTask" name='todoTitle'
                                type="text" className="validate" />
                            <label htmlFor="setTask">Title task</label>
                        </div>

                        <div className="input-field col s12">
                            <textarea name='todoDiscription' ref={register}
                                id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Discription</label>
                        </div>
                        <div className={`col s12 ${style.tododButton} `} >
                            <a className="waves-effect waves-light   indigo lighten-3 white-text btn" onClick={onSubmit}>Ok</a>
                        </div>
                    </form>
                </div>

                <TodoListContainer />

            </div>


        </>
    )
}


export default TodoForm;