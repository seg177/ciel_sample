// 액션 정의
export const CALL_API           = 'CALL_API';            // API 호출
export const CALL_API_SUCCESS   = 'CALL_API_SUCCESS';    // API 호출 성공
export const CALL_API_FAILED    = 'CALL_API_FAILED';     // API 호출 실패
export const SET_DATA  = 'SET_DATA';     // 데이터 저장

export const TEST_ACTION1 = 'TEST_ACTION1';
export const TEST_ACTION2 = 'TEST_ACTION2';
export const TEST_ACTION3 = 'TEST_ACTION3';

// 액션 생성 함수
export const CallApi =()=>({type: CALL_API});     // API 호출

// 테스트 액션쟁이들
export const TestAction =()=>({type: TEST_ACTION1});
export const TestAction2 =()=>({type: TEST_ACTION2});
export const TestAction3 =()=>({type: TEST_ACTION3});
