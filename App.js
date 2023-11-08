// App.js 메인
// Redux 및 Redux Saga 구성

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import {applyMiddleware, legacy_createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import FunctionComponentSample from "./src/01.Component/FunctionComponentSample";

// 01. Saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// 02. Store 생성 - createStore 함수 지원 종료로 인해 redux-toolkit 사용 권장
// 생성한 Reducer에 미들웨어 추가하여 Store를 구성하는 작업
const store = legacy_createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
);

// 03. 루트 사가 실행
sagaMiddleware.run(rootSaga);

// 04. 컴포넌트
// Store 안에서 컴포넌트가 돌도록 처리
const App: () => Node = () => {
  return (
      <Provider store={store}>
          <SafeAreaView>
              <FunctionComponentSample />
          </SafeAreaView>
      </Provider>
  );
};

export default App;
