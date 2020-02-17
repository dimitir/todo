import dispatchActions from '../dispatchActions';
import { ActionType, ActionTypeMake, InitialStateType } from '../types';



const initialState: InitialStateType = {
    todoArr: [],
}

const todoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case dispatchActions.ADD_NEW_TODO:
                state.todoArr.unshift({
                    id: new Date().getTime(),
                    title: action.payload.title,
                    discription: action.payload.discription,
                    completed: false
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