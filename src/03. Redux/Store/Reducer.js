// 정의한 액션 import
import * as Action from './Action';
// State 초기화
const initialState = {message: 'Redux 기본 메세지'};

// 리듀서 처리
export default function appConfig(state = initialState, action) {
    let result;
    switch (action.type) {
        // 메세지를 변경하는 액션 타입
        case Action.ACTION_SET_MESSAGE:
            // 불변성 유지로 state를 그대로 수정하는 것이 아닌, 같은 내용의 새로운 객체 생성하여 전달
            result = {...state, message: action.payload}
            console.log('[Redux] Reducer ', action.payload)
            return result;
        default:
            return state;
    }
}
