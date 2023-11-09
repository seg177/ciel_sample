// App.js 메인
// 03. Redux 및 03. Redux Saga 구성

import React from 'react';
import type {Node} from 'react';

import {applyMiddleware, legacy_createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./src/03. Redux/RootReducer";
import {rootSaga} from "./src/04. Redux-Saga/RootSaga";
import Navigator from "./src/Navigator";


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
          <Navigator/>
      </Provider>
  );
};

export default App;
