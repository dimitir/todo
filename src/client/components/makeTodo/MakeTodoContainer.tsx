import MakeTodo from './MakeTodo';
import { connect, ConnectedProps } from 'react-redux';
import { addNewTodo } from '../../store/toDo/actions';
import { ActionTypePayload } from '../../store/types';



const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (todo: ActionTypePayload) => dispatch(addNewTodo(todo))
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