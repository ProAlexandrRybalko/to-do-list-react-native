import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { sumReducer } from "../redux/sumReducer";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga/index";
import { accountingsReducer } from "../redux/AccountingsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    sumReducer,
    accountingsReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
