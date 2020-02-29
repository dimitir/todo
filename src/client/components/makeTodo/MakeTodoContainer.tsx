import MakeTodo from './MakeTodo';
import { connect, ConnectedProps } from 'react-redux';
import { addNewTodo } from '../../store/todo/actions';
import { TodoItemType } from '../../store/RootStore/types';
import { Dispatch } from 'redux';


const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: (todo: TodoItemType) => dispatch(addNewTodo(todo))
})


const connector = connect(
    null,
    mapDispatchToProps
);


export type MakeTodoPropsType = ConnectedProps<typeof connector>;

/* export type Props = PropsFromRedux & {
    backgroundColor: string
} */

export default connector(MakeTodo);