import {take, takeEvery, put, call, fork} from 'redux-saga/effects';
;

async function getData(pattern){
    const request = await fetch(`https://jsonplaceholder.typicode.com/${pattern}`);

    const data = await request.json();

    return data;
}

export function* loadPosts(){
    const posts = yield call(getData, 'posts');
    yield put({type: 'SET_POSTS', payload: posts});
}
export function* loadUsers(){
    const users = yield call(getData, 'users');
    yield put({type: 'SET_USERS', payload: users});

}

export function* workerSaga(){
    yield fork(loadPosts);
    yield fork(loadUsers);
}
export function* watchLoadDataSaga(){
    // while (true) {
    //     yield take('CLICK') // CLICK - action name
    //     yield workerSaga();
        
    // }
    yield takeEvery('LOAD_DATA', workerSaga)
}

export default function* rootSaga() {
    yield fork(watchLoadDataSaga);
}