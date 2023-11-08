import {combineReducers} from "redux";
import testReducer from "./Store/Reducer";

// 01. 리듀서 병합
const reducer = combineReducers({
    // 개별 리듀서 나열
    testReducer

    /* 복수의 리듀서로 구분해놓았을 경우 쭉 나열하여 병합 가능
        testReducer1,
        testReducer2,
        testReducer3
    */
});

// RootReducer 메인
const rootReducer = (state, action) => {
    return reducer(state, action);
};

export default rootReducer;
