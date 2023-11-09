import {Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as sagaTestAction from "../04. Redux-Saga/Store/Action";
import {getLocalData} from "./Method";

const SagaTestView =()=>{
    const token     = useSelector(state => state.sagaTestReducer.token);        // token
    const apiResult = useSelector(state => state.sagaTestReducer.apiResult);    // apiResult
    // Dispatch 객체
    const dispatch = useDispatch();

    // 화면 마운트 이후, deps의 값이 변경이 된 경우 호출
    useEffect(()=>{
        console.log('[화면] token, apiResult 업데이트 됨');
    },[token, apiResult]);


    // 버튼 기능 구현
    function BtnProcess(){
        console.log('[Redux-saga] 액션 Dispatch');
        dispatch(sagaTestAction.CallApi());
    }

    // 만약 그냥 여러 액션과 비동기 작업을 화면에서 호출해버린다면?
    async function WhatIfCallManyAction() {
        dispatch(sagaTestAction.CallApi());
        dispatch(sagaTestAction.TestAction());
        dispatch(sagaTestAction.TestAction2());
        dispatch(sagaTestAction.TestAction3());
        const localData = await getLocalData('token');
        console.log('[async]] ', localData);

    }



    return(
        <View style={style.container}>
            <Text>{'Redux-Saga 에제'}</Text>

            {/*State를 출력함*/}
            <View style={style.textView}>
                <Text>{apiResult}</Text>
                <Text>{token}</Text>
            </View>

            {/*State 변경 버튼*/}
            <TouchableOpacity style={style.button} onPress={()=> BtnProcess()}>
                <Text>{"토큰 생성 비동기 작업"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={()=> WhatIfCallManyAction()}>
                <Text>{"화면에서 여러 작업을 호출"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style={
    container:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: '#bbff00'
    },

    button : {
        width: 300,
        height: 60,
        backgroundColor: '#affaa0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textView :{
        width: 300,
        height: 60,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default SagaTestView;
