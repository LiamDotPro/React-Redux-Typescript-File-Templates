import {put, takeEvery, all, call} from 'redux-saga/effects';

// export function* () {
//
//     const someVar: any = yield call();
//
//     yield put({type: '[ ] ', payload: {}});
// }

export function* watch() {
    yield takeEvery('[ ] ', );
}

export default function* rootSaga() {
    yield all([

    ])
}
