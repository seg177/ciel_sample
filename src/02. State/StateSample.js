
// State, Props 예제
import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";

const StateSample =()=>{
    // UseState 함수를 이용하여 State 선언
    // useState는 [상태 값, 상태 값을 변경할 함수 명] = useState(초기 상태 값); 으로 구성함
    const [message, setMessage] = useState('초기 메세지!');

    return(
        <View style={style.container}>
            <Text>{'State 에제'}</Text>

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


export default StateSample;


