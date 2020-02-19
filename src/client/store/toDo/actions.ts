import dispatchActions from '../dispatchActions';
import { ActionTypeUseId, ActionTypeMake, TodoItemType, } from '../types';

export const addNewTodo = (todo: TodoItemType): ActionTypeMake => ({
    type: dispatchActions.ADD_NEW_TODO,
    payload: todo
})

export const changeCompeted = (id: number): ActionTypeUseId => ({
    type: dispatchActions.CHANGE_COPMPLETED,
    id: id
})


export const deleteTodo = (id: number): ActionTypeUseId => ({
    type: dispatchActions.DELETE_TODO,
    id: id
})


export const editTodo = (todo:TodoItemType): ActionTypeMake => ({
    type: dispatchActions.EDIT_TODO,
    payload: todo
})