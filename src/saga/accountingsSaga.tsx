import { put, takeEvery } from 'redux-saga/effects';
import { 
    AccountingsActionTypes, 
    addAccountingCreator, 
    AddAccountingsAction, 
    changeAccountingCreator, 
    ChangeAccountingsAction, 
    SetAccountingsAction, 
    setAccountingsCreator, 
    subAccountingCreator, 
    SubAccountingsAction 
} from '../redux/AccountingsReducer';

function* setAccountingsWorker(action: SetAccountingsAction) {
    yield put(setAccountingsCreator(action.payload));
}

function* addAccountingsWorker(action: AddAccountingsAction) {
    yield put(addAccountingCreator(action.payload));
}

function* subAccountingsWorker(action: SubAccountingsAction) {
    yield put(subAccountingCreator(action.payload));
}

function* changeAccountingsWorker(action: ChangeAccountingsAction) {
    yield put(changeAccountingCreator(action.payload));
}

export function* accountingWatcher() {
    yield takeEvery(AccountingsActionTypes.ASYNC_SET_ACCOUNTINGS, setAccountingsWorker);
    yield takeEvery(AccountingsActionTypes.ASYNC_ADD_ACCOUNTING, addAccountingsWorker);
    yield takeEvery(AccountingsActionTypes.ASYNC_SUB_ACCOUNTING, subAccountingsWorker);
    yield takeEvery(AccountingsActionTypes.ASYNC_CHANGE_ACCOUNTING, changeAccountingsWorker);
}
