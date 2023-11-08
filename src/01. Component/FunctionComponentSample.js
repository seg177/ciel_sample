
// Function Component 예제
import {View, Text} from "react-native";
import styled, {css} from "styled-components/native";
import React from "react";

const FunctionComponentSample =()=>{
    // styled_component style 가져오기
    const {Container_styled}= style_styled_component;

    // JSX Render
    return(
        <>
            <View style={style_default.container}>
                <Text>{"함수형 컴포넌트 영역 1"}</Text>
            </View>

            <Container_styled>
                <Text>{"함수형 컴포넌트 영역 1"}</Text>
            </Container_styled>
        </>
    );
}

// 스타일은 내부,외부 어디든 작성해도 무관할 것 같음.
// 기본적인 스타일 예제
const style_default = {
    container : {
            width: 200,
            height: 50,
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#0ffff0'
    }
}

// styled-component 예제
const style_styled_component = {
    Container_styled : styled(View)`
      width: 200px;
      height: 50px;
      border: 1px solid black;
      background-color: #00ff00;
    `,
};

export default FunctionComponentSample;
