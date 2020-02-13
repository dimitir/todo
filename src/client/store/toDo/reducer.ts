import dispatchActions from '../dispatchActions';
import { ActionType, InitialStateType } from '../types';



const initialState: InitialStateType = {
    todoArr: [],
}

const todoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case dispatchActions.ADD_NEW_TODO:
            state.todoArr.push({
                id: new Date().getTime(),
                item: action.payload,
                done: false
            })
            return {
                ...state,
                todoArr: state.todoArr
            }
        default: {
            return state
        }
    }
}

export default todoReducer;