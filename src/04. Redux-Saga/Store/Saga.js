import {takeLatest, put, call, select} from "redux-saga/effects";
import {CALL_API, CALL_API_FAILED, CALL_API_SUCCESS, SET_DATA} from "./Action";
import {setLocalData} from "../Method";

// 실제 Saga 기능 동작하는 함수, 길어진다면 별도 파일로 분리도 괜찮음.
const functionSetMessage =()=>{
    return function*(action){
        console.log('[Redux-saga] Saga 함수 동작');
        // State 조회
        const token    = yield select((state) => state.sagaTestReducer.token);

        // 비동기 작업
        const saveLocal = yield call(()=>{return setLocalData('token', token)});
        console.log('[Redux-saga] 비동기 작업 결과 : ', saveLocal);

        // 비동기 작업 결과에 따른 분기
        if(saveLocal){
            // 결과 데이터 저장 액션 호출
            const token = '서은규토큰토큰';
            console.log('[Redux-saga] 성공 액션, 데이터 저장 액션 호출');
            yield put({type: CALL_API_SUCCESS});
            yield put({type: SET_DATA, payload: token});
        }else{
            // 실패의 경우
            yield put({type: CALL_API_FAILED});
        }
    }
}

// Saga 메인
export function* testSaga(){
    // CALL_API 액션으로 들어왔을 때, functionSetMessage 호출
    yield takeLatest(CALL_API, functionSetMessage());
}
