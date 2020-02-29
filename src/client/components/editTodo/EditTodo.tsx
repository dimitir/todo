import React from 'react';
import queryString from 'query-string'
import { TypePropsEdit } from './EditTodoContainer';
import { useForm } from "react-hook-form";
import style from '../makeTodo/makeTodo.module.scss';
import { FormData, TodoItemType } from '../../store/RootStore/types';
import { useHistory } from 'react-router-dom'

interface commonEditProps extends TypePropsEdit {
    location: { search: string }
}



const EditTodo: React.FC<commonEditProps> = ({ location, todoItems, editTodo }: commonEditProps) => {

    console.log(todoItems);
    const history = useHistory();
    const query = queryString.parse(location.search);
    const idResently = query.id;

    const resentlyTodo: TodoItemType[] = todoItems.todoArr.filter((todo: TodoItemType) => todo._id == idResently);
  
    const { register, handleSubmit, errors } = useForm<FormData>({
        defaultValues: {
            todoTitle: resentlyTodo[0].title,
            todoDiscription: resentlyTodo[0].discription,
        }
    });



    const onSubmit = handleSubmit(({ todoTitle, todoDiscription }) => {
        editTodo({ _id: resentlyTodo[0]._id, title: todoTitle, discription: todoDiscription});
        history.goBack();
    })
    return (
        <>
            <div className={`container ${style.inputBox}`}>
                <div className="row">
                    <form onSubmit={onSubmit} className={`col s12 `}>

                        <div className={` input-field col s9 ${style.inputTitleTodo}`} >
                            <input
                                placeholder="Placeholder"
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

        </>
    )
}

export default EditTodo;


