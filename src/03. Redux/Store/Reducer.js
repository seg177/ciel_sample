// 정의한 액션 import
import * as Action from './Action';
// State 초기화
const initialState = {message: 'Redux 기본 메세지'};

// 리듀서 처리
export default function appConfig(state = initialState, action) {
    let result;
    switch (action.type) {
        case Action.ACTION_SET_MESSAGE:
            result = {...state, message: action.payload}
            return result;
        default:
            return state;
    }
}
