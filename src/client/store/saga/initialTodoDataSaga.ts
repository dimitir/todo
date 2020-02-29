import { put, call } from 'redux-saga/effects';
import { putInitialData } from '../todo/actions';

async function fetchInitialValues() {
    try {
        const response = await fetch('/api/todo');
        const json = await response.json();
        return json;
    }

    catch (e) {
        console.error(e);
        return [];
    }

}

export default function* watchInitialValues() {
    const data = yield call(fetchInitialValues);

    console.log(data);
    yield put(putInitialData(data))
}