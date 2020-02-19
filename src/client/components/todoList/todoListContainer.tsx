import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../store/reducers';
import TodoList from './TodoList';
import { changeCompeted, deleteTodo } from '../../store/todo/actions';

const stateProps = (state: RootState) => ({
    todoList: state.todoListItems
})


const dispathProps = (dispatch: Dispatch) => ({
    changeCompeted: (id: number) => dispatch(changeCompeted(id)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
})


const connector = connect(stateProps, dispathProps);


export type TodoListPropsType = ConnectedProps<typeof connector>;
export default connector(TodoList);
