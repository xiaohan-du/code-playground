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

            <UseEffectCounter1 />
        </>
    )
}

export default Playground;