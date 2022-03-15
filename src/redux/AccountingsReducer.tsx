import { AccTypeId } from "../components/Accounting/AccountingsType"

export enum AccountingsActionTypes {
    SET_ACCOUNTINGS = "SET_ACCOUNTINGS",
    ADD_ACCOUNTING  =  "ADD_ACCOUNTING",
    SUB_ACCOUNTING  =  "SUB_ACCOUNTING",
    CHANGE_ACCOUNTING = "CHANGE_ACCOUNTING",

    ASYNC_SET_ACCOUNTINGS = "ASYNC_SET_ACCOUNTINGS",
    ASYNC_ADD_ACCOUNTING  =  "ASYNC_ADD_ACCOUNTING",
    ASYNC_SUB_ACCOUNTING  =  "ASYNC_SUB_ACCOUNTING",
    ASYNC_CHANGE_ACCOUNTING = "ASYNC_CHANGE_ACCOUNTING"
}

interface payloadChangeAccountingType {
    strId: string;
    obj: AccTypeId;
}

interface AccountingsState {
    accountings: AccTypeId[];
}

export interface SetAccountingsAction {
    type: AccountingsActionTypes.SET_ACCOUNTINGS;
    payload: AccTypeId[];
}

export interface AddAccountingsAction {
    type: AccountingsActionTypes.ADD_ACCOUNTING;
    payload: AccTypeId;
}

export interface SubAccountingsAction {
    type: AccountingsActionTypes.SUB_ACCOUNTING;
    payload: string;
}

export interface ChangeAccountingsAction {
    type: AccountingsActionTypes.CHANGE_ACCOUNTING;
    payload: payloadChangeAccountingType;
}


type AccountingsAction = SetAccountingsAction | AddAccountingsAction | SubAccountingsAction | ChangeAccountingsAction;

const defaultState: AccountingsState = {
    accountings: []
}

const getSubObjArray = (id: string, array: AccTypeId[]) => {
    return array.filter((val, _) => val._id !== id);
}

const getInsertedObjArray = (id: string, obj: AccTypeId, array: AccTypeId[]) => {
    let newArray = [...array];
    const i = newArray.findIndex((val) => val._id === id);
    newArray.splice(i, 1, obj);
    return newArray;
}

export const accountingsReducer = (state = defaultState, action: AccountingsAction): AccountingsState => {
    switch(action.type) {
        case AccountingsActionTypes.SET_ACCOUNTINGS:
            return { accountings: action.payload }
        case AccountingsActionTypes.ADD_ACCOUNTING:
            return { accountings: [...state.accountings, action.payload] }
        case AccountingsActionTypes.SUB_ACCOUNTING:
            return { accountings: getSubObjArray(action.payload, state.accountings) }  
        case AccountingsActionTypes.CHANGE_ACCOUNTING:
            return { accountings: getInsertedObjArray(action.payload.strId, action.payload.obj, state.accountings)}         
        default:
            return state;
    }
}

export const setAccountingsCreator = (payload: AccTypeId[]) => ({type: AccountingsActionTypes.SET_ACCOUNTINGS, payload});
export const addAccountingCreator = (payload: AccTypeId) => ({type: AccountingsActionTypes.ADD_ACCOUNTING, payload});
export const subAccountingCreator = (payload: number) => ({type: AccountingsActionTypes.SUB_ACCOUNTING, payload});
export const changeAccountingCreator = (payload: payloadChangeAccountingType) => ({type: AccountingsActionTypes.CHANGE_ACCOUNTING, payload});

export const asyncSetAccountingsCreator = (payload: AccTypeId[]) => ({type: AccountingsActionTypes.ASYNC_SET_ACCOUNTINGS, payload});
export const asyncAddAccountingCreator = (payload: AccTypeId) => ({type: AccountingsActionTypes.ASYNC_ADD_ACCOUNTING, payload});
export const asyncSubAccountingCreator = (payload: string) => ({type: AccountingsActionTypes.ASYNC_SUB_ACCOUNTING, payload});
export const asyncChangeAccountingCreator = (payload: payloadChangeAccountingType) => ({type: AccountingsActionTypes.ASYNC_CHANGE_ACCOUNTING, payload});