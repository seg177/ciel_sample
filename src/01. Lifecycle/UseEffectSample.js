import React, {useEffect, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

const UseEffectSample =()=>{
    // UseState 함수를 이용하여 State 선언
    const [message, setMessage] = useState('초기 메세지!');

    // 특정 prop, state가 변경될 때 호출
    useEffect(()=>{
        console.log('[UseEffect]  update :', message);
    },[message]);


    useEffect(()=>{
        // effect cleanup 함수
        return ()=>{
            console.log('[UseEffect]  clean up');
        }
    },[]);


    // deps가 생략되면 화면 랜더링 마다 호출
    useEffect(()=>{
        console.log('[UseEffect]  Mount :', message);
    });


    return(
        <View style={style.container}>
            <Text>{'UseEffect 에제'}</Text>

            {/*State를 출력함*/}
            <View style={style.textView}>
                <Text>{message}</Text>
            </View>

            {/*State 변경 버튼*/}
            <TouchableOpacity style={style.button} onPress={()=> setMessage('메세지 변경!')}>
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

export default UseEffectSample;
