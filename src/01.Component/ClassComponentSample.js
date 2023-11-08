
// Component interface import
import React, {Component} from "react";
import {Text, View} from "react-native";
import styled from "styled-components/native";

// 컴포넌트 선언, Component extends 필요
class ClassComponentSample extends Component{

    state ={
        message: "클래스 컴포넌트 예제 1"
    }

    // styled-component
    container_styled = style_styled_component.container_styled;

    constructor() {
        super();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        console.log('[Class] componentDidUpdate ', prevProps, prevState, this.state);
    }


    // 렌더 함수가 포함되어야 한다.
    render(){
        return(
            <>
                <View style={style_default.container}>
                    <Text>{"함수형 컴포넌트 영역 1"}</Text>
                </View>

                <View style={this.container_styled}>
                    <Text>{"함수형 컴포넌트 영역 1"}</Text>
                </View>
            </>
        )
    }
}

const style_default = {
    container : {
        width: 100,
        height: 200,
        border : '1px solid black'
    }
}

// styled-component 예제
const style_styled_component = {
    container_styled : styled(View)`
      width: 100px;
      height: 200px;
      border: 1px solid black;
    `,
};

// 클래스 선언시 export를 붙혀도 무관
export default ClassComponentSample;
