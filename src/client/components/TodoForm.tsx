import React, { useRef } from 'react';
import { PropsFromRedux } from './TodoFormContainer';
import style from './todoForm.module.scss';
import steleCss from './todo.module.css';



const TodoForm: React.FC<PropsFromRedux> = ({ addTodo }: PropsFromRedux) => {


    const ref = useRef<HTMLInputElement>(null);

    const keyPressHendler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(ref.current!.value);
            addTodo(ref.current!.value);
            ref.current!.value = '';
        }
    }

    /*  const changeHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
         // setTitle(event.target.value);  brand-logo
     } */
    return (
        <>
            <nav className={`nav-wrapper  ${style.toodoTitle}`}>
                <div className={`nav-wrapper ${style.doTitle}`}>
                    <a href="#" className={` ${style.todoA}`} >Todo list</a>
                </div>
            </nav>
            <div className="container">

                <div className="row">
                    <form className={`col s12 ${steleCss.mainteg}`}>

                        <div className="input-field col s5  ">
                            <input id="setTask"
                                ref={ref}
                                onKeyPress={keyPressHendler}
                                type="text" className="validate" />
                            <label htmlFor="setTask">Title task</label>
                        </div>

                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Discription</label>
                        </div>
                        <div className={`col s12 ${style.test}  ${style.newname}`} >
                            <a className="waves-effect waves-light btn">button</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default TodoForm;