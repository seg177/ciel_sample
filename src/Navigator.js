import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LifeCycleSample from "./01. Lifecycle/LifeCycleSample";
import FunctionComponentSample from "./01. Component/FunctionComponentSample";
import StateSample from "./02. State/StateSample";
import PropertySample from "./02. State/PropertySample";
import ActionTestView from "./03. Redux/ActionTestView";
import SagaTestView from "./04. Redux-Saga/SagaTestView";
import UseEffectSample from "./01. Lifecycle/UseEffectSample";
const Navigator = createSwitchNavigator(
    {
        LIFECYCLE:      {screen: LifeCycleSample},
        COMPONENT:      {screen: FunctionComponentSample},
        STATE:          {screen: StateSample},
        PROPS:          {screen: PropertySample},
        ACTION:         {screen: ActionTestView},
        SAGA:           {screen: SagaTestView},
        EFFECT:         {screen: UseEffectSample}
    },
    {initialRouteName: 'SAGA', headerMode: 'none'},
);

export default createAppContainer(Navigator);
