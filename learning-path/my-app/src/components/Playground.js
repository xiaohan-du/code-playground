import React from 'react';
import ComponentBlock from './ComponentBlock';
import UseStateForm from './examples/useState/UseStateForm';
import UseReducerForm from './examples/useReducer/UseReducerForm';
import UseContextDemo from './examples/useContext/UseContextDemo';
import UseReducerColorSetter from './examples/useReducer/UseReducerColorSetter';
import ClassTitleCounter from './examples/ClassTitleCounter';
import UseEffectComponentDidUpdate from './examples/useEffect/UseEffectComponentDidUpdate';
import UseEffectCounter from './examples/useEffect/UseEffectCounter';
import ComponentDidUpdateCounter from './examples/useEffect/ComponentDidUpdateCounter';
import UseEffectCounterDependency from './examples/useEffect/UseEffectCounterDependency';
import UseEffectCounter1 from './examples/useEffect/UseEffectCounter1';
import UseEffectUnchangedValue from './examples/useEffect/UseEffectUnchangedValue';
import MyClassTheme from './examples/useContext/themeClass/MyClassTheme';
import MyFunctionTheme from './examples/useContext/themeFunction/MyFunctionTheme';
import Panel from './examples/useContext/themeDemo/Panel';

const Playground = () => {
    return (
        <>

            <ComponentBlock title={'useContext Hook Demo'}
                component={<UseStateForm />} />

            <ComponentBlock title={'useContext Hook Demo'}
                component={<UseReducerForm />} />

            <ComponentBlock title={'useContext Hook Demo'}
                component={<UseContextDemo />} />

            <ComponentBlock title={'useReducer Demo'}
                component={<UseReducerColorSetter />} />

            <ComponentBlock title={'Title Counter with Class LifeCycle Methods'}
                component={<ClassTitleCounter />} />

            <ComponentBlock title={'Make useEffect equals to componentDidUpdate'}
                component={<UseEffectComponentDidUpdate />} />

            <ComponentBlock title={'useEffect counter'}
                component={<UseEffectCounter />} />

            <ComponentBlock title={'componentDidUpdate counter'}
                component={<ComponentDidUpdateCounter />} />

            <ComponentBlock title={'useEffect counter with dependency'}
                component={<UseEffectCounterDependency />} />

            <ComponentBlock title={'useEffect counter with dependency'}
                component={<UseEffectUnchangedValue />} />

            <ComponentBlock title={'useEffect counter without setTimeout'}
                component={<UseEffectCounter1 />} />

            <ComponentBlock title={'Official tutorial theme example with class components'}
                component={<MyClassTheme />} />

            <ComponentBlock title={'Official tutorial theme example with function components'}
                component={<MyFunctionTheme />} />
        </>
    )
}

export default Playground;