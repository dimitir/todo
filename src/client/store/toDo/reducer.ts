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
                title: action.payload.title,
                discription: action.payload.discription,
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