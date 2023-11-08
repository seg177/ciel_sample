import {takeLatest} from "redux-saga/effects";
import {ACTION_SET_MESSAGE} from "./Action";

// 처리하는 것은 함수가 아니라 constant
const functionSetMessage = {}

// Saga 메인
export function* testSaga(){
    yield takeLatest(ACTION_SET_MESSAGE, functionSetMessage);
}
