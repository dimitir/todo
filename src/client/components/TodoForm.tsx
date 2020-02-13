import React, { useRef } from 'react';
import { PropsFromRedux } from './TodoFormContainer';

export interface addTodoTypes {
    (td: string): void;
}

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
         // setTitle(event.target.value);
     } */
    return (
        <>
            <div className="row">
                <form className="col s12">
                    <div className="input-field col s10">
                        <input id="setTask"
                            ref={ref}
                            onKeyPress={keyPressHendler}
                            type="text" className="validate" placeholder="Input task" />
                        <label htmlFor="setTask">Input task</label>
                    </div>
                    <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                </form>
            </div>
        </>
    )
}


export default TodoForm;