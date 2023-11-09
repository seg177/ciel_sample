
// State, Props 예제
import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";

// 부모 컴포넌트
const PropertySample =()=>{
    // UseState 함수를 이용하여 State 선언
    // useState는 [상태 값, 상태 값을 변경할 함수 명] = useState(초기 상태 값); 으로 구성함
    const [message, setMessage] = useState('초기 메세지!');

    return(
        <>
            <View style={style.container}>
                <Text>{'Props 에제'}</Text>

                {/*State를 출력함*/}
                <View style={style.textView}>
                    <Text>{message}</Text>
                </View>

                {/*State 변경 버튼*/}
                <TouchableOpacity style={style.button} onPress={()=> setMessage('메세지 변경!')}>
                    <Text>{"메세지 변경 버튼"}</Text>
                </TouchableOpacity>
            </View>

            {/*자식 컴포넌트*/}
            <ChildComponent
                message={message}
                setMessage={(text)=>setMessage(text)}
            />
        </>
    );
}

// 자식 컴포넌트
// const ChildComponent =(props)=>{} 로 받아서 내부에서 분리해도 무관
const ChildComponent =({message, setMessage})=>{

    return(
        <View style={style.container}>
            <Text>{'자식'}</Text>

            {/*State를 출력함*/}
            <View style={style.textView}>
                <Text>{message}</Text>
            </View>

            {/*State 변경 버튼 - prop으로 받은 setMessage 함수를 호출하여 부모 컴포넌트로 올라가 State 변경 처리*/}
            {/*이후 변경된 message가 props으로 전달되며 렌더링*/}
            <TouchableOpacity style={style.button} onPress={()=> setMessage('자식으로부터 메세지 변경!')}>
                <Text>{"메세지 변경"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style={
    container:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
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

export default PropertySample;
