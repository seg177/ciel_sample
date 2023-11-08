
// Function Component 예제
import {View, Text} from "react-native";
import styled from 'styled-components/native';

const FunctionComponentSample =()=>{
    // styled_component style 가져오기
    const {container_styled}= style_styled_component;

    // JSX Render
    return(
        <>
            <View style={style_default.container}>
                <Text>{"함수형 컴포넌트 영역 1"}</Text>
            </View>

            <View style={container_styled}>
                <Text>{"함수형 컴포넌트 영역 1"}</Text>
            </View>
        </>
    );
}

// 스타일은 내부,외부 어디든 작성해도 무관할 것 같음.
// 기본적인 스타일 예제
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

export default FunctionComponentSample;