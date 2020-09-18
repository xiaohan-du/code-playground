import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Home from './Home';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Test Home page functions', () => {
    it('should display the correct button to be tested', () => {
        const { getByTestId } = render(<Router><Home /></Router>);
        expect(getByTestId('1')).toBeTruthy();
    })

    it('should display the correct cost when add button is clicked', () => {
        const wrapper = mount(<Router><Home /></Router>);
        expect(wrapper.find('.shop-card--total-price').at(0).text()).toBe('Total price: 0');
        const buttons = wrapper.find('.add');
        buttons.at(0).simulate('click');
        expect(wrapper.find('.shop-card--total-price').at(0).text()).toBe('Total price: 10');
    })

})