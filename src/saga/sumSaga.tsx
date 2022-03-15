import { put, takeEvery } from 'redux-saga/effects';
import {  
    ASYNC_ADD_SUM, 
    ASYNC_SET_SUM, 
    ASYNC_SUB_SUM,
    addSumCreator, 
    setSumCreator, 
    subSumCreator, 
    SumAction } from '../redux/sumReducer';


function* setSumWorker(action: SumAction) {
    yield put(setSumCreator(action.payload));
}

function* addSumWorker(action: SumAction) {
    yield put(addSumCreator(action.payload));
}

function* subSumWorker(action: SumAction) {
    yield put(subSumCreator(action.payload));
}

export function* sumWatcher() {
    yield takeEvery(ASYNC_SET_SUM, setSumWorker);
    yield takeEvery(ASYNC_ADD_SUM, addSumWorker);
    yield takeEvery(ASYNC_SUB_SUM, subSumWorker);
}
