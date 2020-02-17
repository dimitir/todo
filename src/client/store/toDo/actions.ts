import dispatchActions from '../dispatchActions';
import { ActionTypeCompleted, ActionTypeMake, ActionTypeMakePayload } from '../types';

export const addNewTodo = (todo: ActionTypeMakePayload): ActionTypeMake => ({
    type: dispatchActions.ADD_NEW_TODO,
    payload: todo
})

export const competed = (id: number): ActionTypeCompleted => ({
    type: dispatchActions.COMPLETED_TASK,
    id: id
})