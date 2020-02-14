import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/reducers';
import TodoList from './TodoList';

const mapToProps = (state: RootState) => ({
    todoList: state.todoListItems
})


const connector = connect(mapToProps, null);


export default connector(TodoList);
export type TodoListPropsType = ConnectedProps<typeof connector>;


