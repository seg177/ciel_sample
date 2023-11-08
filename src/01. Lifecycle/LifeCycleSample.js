
// Component interface import
import React, {Component} from "react";
import {TouchableOpacity, View} from "react-native";

// 컴포넌트 선언, Component extends 필요
class ClassComponentSample extends Component{
    // 전역으로 그냥 선언해버리면?
    state ={
        message: "클래스 컴포넌트 예제 1"
    }

    // 01. 생성자
    constructor() {
        super();
        // this로 내부 변수 접근
        console.log('[Class] constructor 완료', this.state);
    }

    // 02. 컴포넌트가 화면에 출력되었을 때
    // 주로 외부 라이브러리 연동을 하거나 데이터 요청을 위한 Axios, Fetch 요청, 또는 DOM 속성 읽기를 진행함.
    componentDidMount() {
        console.log('[Class] componentDidMount 완료', this.state);
    }

    // 03. state 업데이트 이후 컴포넌트가 렌더링 되어야하는지 검토
    // 컴포넌트 자체가 업데이트 되지 않아도, 경우에 따라서는 부모 컴포넌트가 리렌더링 되었을때 자식 컴포넌트도 렌더링됨.
    // 이를 수동으로 구분하여 조작할 수 있음.
    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        // nextProps, nextState를 확인하고 수동으로 비교 가능한 단계
        // true 리턴이면 업데이트, false면 안함.
        console.log('[Class] shouldComponentUpdate ', this.state);
        return true;
    }


    // 03. 업데이트 전 단계에 이전 Prop과 State를 확인할 수 있는 단계
    // render -> getSnapshotBeforeUpdate -> DOM 변화 발생 -> ComponentDidUpdate 순
    // DOM 변화 일어나기 직전의 상태를 가져오고 여기서 리턴하는 값은 ComponentDidUpate의 3번째 파라미터로 받아옴
    getSnapshotBeforeUpdate(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null {
        console.log('[Class] getSnapshotBeforeUpdate ', prevState, this.state);
    }

    // 04. 업데이트
    // render 호출 이후 발생
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        // this.props, this.state가 변경되어 있는 상태
        // prevProps와 prevState, getSnapshotBeforeUpdate로 반환된 값 확인 및 비교가능
        console.log('[Class] componentDidUpdate ', prevProps, prevState, this.state);
    }

    // 메세지 변경 함수
    setMessage(msg){
        this.setState({message: msg})
    }

    // 렌더 함수가 포함되어야 한다.
    render(){
        return(
            <View>
                <TouchableOpacity onPress={"클래스 컴포넌트 예제 2"}/>
                <TouchableOpacity onPress={"클래스 컴포넌트 예제 3"}/>
            </View>
        )
    }
}

// 클래스 선언시 export를 붙혀도 무관
export default ClassComponentSample;