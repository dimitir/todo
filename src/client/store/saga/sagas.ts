import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import watchInitialValues from './initialTodoDataSaga';
import watchAddTodo from './addTodoSaga';
import watchDeleteTodo from './deleteTodoSaga';
import watchEditTodo from './editTodoSaga';
import watchCompletedTodo from './completedTodoSaga';


function* watchAndLog() {
    while (true) {
        const action = yield take('*')
        const state = yield select()

        console.log('action', action)
        console.log('state after', state)
    }
}



export default function* rootSaga() {
    yield all([
        watchInitialValues(),
        watchAddTodo(),
        watchDeleteTodo(),
        watchEditTodo(),
        watchCompletedTodo(),
    ])
}

/*

 

*/