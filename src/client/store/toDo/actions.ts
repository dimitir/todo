import dispatchActions from '../dispatchActions';
import { ActionType } from '../types';

export const addNewTodo = (todo: string): ActionType => ({
    type: dispatchActions.ADD_NEW_TODO,
    payload: todo
})