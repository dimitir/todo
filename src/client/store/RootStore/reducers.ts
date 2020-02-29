import { combineReducers } from 'redux';
import { ConnectedProps } from 'react-redux';
import todoListItems from '../todo/reducer';
import { InitialStateType } from './types';


const rootReducer = combineReducers({
    todoListItems,
});

export interface RootState {
    todoListItems: InitialStateType
}

export default rootReducer;