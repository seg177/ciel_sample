//Root Saga
import {all} from "redux-saga/effects";
import {testSaga} from "./Store/Saga";

export function* rootSaga(){
    // saga 병함
    yield all([
        testSaga()

        /*
        * 여러개인 경우 그냥 나열하면 됨.
        * testSaga(),
        * testSaga2(),
        * testSaga3()
        * */
    ])
}
