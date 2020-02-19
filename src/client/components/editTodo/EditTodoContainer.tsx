import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../store/reducers';
import { TodoItemType } from '../../store/types';
import { editTodo } from '../../store/todo/actions';
import EditTodo from './EditTodo';



const StateProps = (state: RootState) => ({
    todoItems: state.todoListItems
})


const DispatchProps = (dispatch: Dispatch) => ({
    editTodo: (todo: TodoItemType) => dispatch(editTodo(todo))
})

console.log('MapToStateProps');
const connector = connect(StateProps, DispatchProps);


export type TypePropsEdit = ConnectedProps<typeof connector>;
export default connector(EditTodo);
