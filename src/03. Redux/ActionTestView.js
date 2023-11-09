import React, {useEffect} from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import * as testAction from './Store/Action';

const ActionTestView =()=>{
    // Store에 선언한 message 상태 조회
    const message = useSelector(state => state.testReducer.message);
    // Dispatch 객체
    const dispatch = useDispatch();

    // 화면 마운트 이후, deps의 값이 변경이 된 경우 호출
    useEffect(()=>{
        console.log('[Effect] UseEffect :', message);
    },[message]);


    // 버튼 이벤트에 바인딩 되는 함수
    function changeMessage(text){
        // 액션 함수를 Dispatch
        console.log('[Redux] 액션 Dispatch');
        dispatch(testAction.SetMessage(text));
    }

    // 렌더 함수
    return(
        <View style={style.container}>
            <Text>{'Redux State 에제'}</Text>

            {/*State를 출력함*/}
            <View style={style.textView}>
                <Text>{message}</Text>
            </View>

            {/*State 변경 버튼*/}
            <TouchableOpacity style={style.button} onPress={()=> changeMessage('메세지 변경!')}>
                <Text>{"메세지 변경 버튼"}</Text>
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


export default ActionTestView;
