import dispatchActions from '../dispatchActions';
import { ActionType, ActionTypePayload } from '../types';

export const addNewTodo = (todo: ActionTypePayload): ActionType => ({
    type: dispatchActions.ADD_NEW_TODO,
    payload: todo
})