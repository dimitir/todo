import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/reducers';
import TodoList from './TodoList';

const mapToProps = (state: RootState) => ({
    todoList: state.todoListItems
})


const connector = connect(mapToProps);


export type TodoListPropsType = ConnectedProps<typeof connector>;
export default connector(TodoList);
