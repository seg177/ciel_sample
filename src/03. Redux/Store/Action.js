// 액션 정의
export const ACTION_SET_MESSAGE = 'ACTION_SET_MESSAGE';    // 메세지 변경 액션 정의

// 액션 생성 함수
export const SetMessage =(value)=>({type: ACTION_SET_MESSAGE, payload: value});
