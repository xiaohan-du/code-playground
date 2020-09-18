import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Home from './Home';
import { getAllByTestId, getByTestId, queryAllByTestId, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Test Home page functions', () => {
    it('should display the correct button to be tested', () => {
        const { getByTestId } = render(<Router><Home /></Router>);
        expect(getByTestId('1')).toBeTruthy();
    })

/*     it('should display the correct cost when add button is clicked', () => {
        const wrapper = mount(<Router><Home /></Router>);
        wrapper.find('.add').at(0).simulate('click');
        expect(wrapper.find('.shop-card--total-price')[0].text()).toBe('Total price: 20');
    }) */

})