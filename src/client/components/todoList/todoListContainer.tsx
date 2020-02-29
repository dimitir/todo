import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../store/RootStore/reducers';
import TodoList from './TodoList';
import { changeCompeted, deleteTodo } from '../../store/todo/actions';

const stateProps = (state: RootState) => {
    return ({
        todoList: state.todoListItems
    })
}



const dispathProps = (dispatch: Dispatch) => ({
    changeCompeted: (id: string) => dispatch(changeCompeted(id)),
    deleteTodo: (id: string) => dispatch(deleteTodo(id))
})


const connector = connect(stateProps, dispathProps);


export type TodoListPropsType = ConnectedProps<typeof connector>;
export default connector(TodoList);
