// 정의한 액션 import
import * as Action from './Action';
// State 초기화
const initialState = {
    token: '-',
    apiResult: '호출 전',
    testValue : 0,
};

// 리듀서 처리
export default function appConfig(state = initialState, action) {
    let result;
    switch (action.type) {
        case Action.CALL_API_SUCCESS:
            result = {...state, apiResult: '성공'}
            console.log('[Redux-saga] 성공 액션 리듀서');
            return result;
        // 호출 결과에 따른 리듀서는 처리해도 되고 안해도 되는 것이라고 생각함.
        // saga 처리 중에 요청에 대한 실패 등 확인이 되는 경우 Alert 함수 호출도 가능함
        // 실패에 대한 액션을 구분해야하는 경우는 아마 별도의 Modal이 들어가는 경우 일 것.
        case Action.CALL_API_FAILED:
            result = {...state, apiResult: '실패'}
            return result;

        // 결과 데이터 저장하는 액션
        case Action.SET_DATA:
            // 불변성 유지로 state를 그대로 수정하는 것이 아닌, 같은 내용의 새로운 객체 생성하여 전달
            result = {...state, token: action.payload}
            console.log('[Redux-saga] 데이터 저장 액션 리듀서');
            return result;

        // 테스트 함수용 리듀서
        case Action.TEST_ACTION1:
            result = {...state, testValue: 1}
            console.log('[Reducer] Test 1 리듀서');
            return result;
        case Action.TEST_ACTION2:
            result = {...state, testValue: 2}
            console.log('[Reducer] Test 2 리듀서');
            return result;
        case Action.TEST_ACTION3:
            result = {...state, testValue: 3}
            console.log('[Reducer] Test 3 리듀서');
            return result;


        default:
            return state;
    }
}
