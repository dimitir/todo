import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../store/RootStore/reducers';
import { TodoItemType } from '../../store/RootStore/types';
import { editTodo } from '../../store/todo/actions';
import EditTodo from './EditTodo';



const StateProps = (state: RootState) => ({
    todoItems: state.todoListItems
})


const DispatchProps = (dispatch: Dispatch) => ({
    editTodo: (todo: TodoItemType) => dispatch(editTodo(todo))
})

const connector = connect(StateProps, DispatchProps);


export type TypePropsEdit = ConnectedProps<typeof connector>;
export default connector(EditTodo);
