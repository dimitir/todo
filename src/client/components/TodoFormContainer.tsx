import TodoForm from './TodoForm';
import { connect, ConnectedProps } from 'react-redux';
import { addNewTodo } from '../store/toDo/actions';



const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (todo: string) => dispatch(addNewTodo(todo))
})



const connector = connect(
    null,
    mapDispatchToProps
);


export type PropsFromRedux = ConnectedProps<typeof connector>;

/* export type Props = PropsFromRedux & {
    backgroundColor: string
} */

// export default connector(TodoForm);

export default connect(null, mapDispatchToProps)(TodoForm);