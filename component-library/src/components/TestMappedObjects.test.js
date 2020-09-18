import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TestMappedObjects from './TestMappedObjects';
import { getAllByTestId, getByTestId, queryAllByTestId, render } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Test functions', () => {
    it('should display the correct button to be tested', () => {
        const { getByTestId } = render(<TestMappedObjects />);
        expect(getByTestId('1')).toBeTruthy();
    })

    it('should display the correct cost when add button is clicked', () => {
        const wrapper = shallow(<TestMappedObjects />);
        const buttons = wrapper.find('.add');
        buttons[0].simulate('click');
        expect(wrapper.find('.total-price')[0].text()).toBe('10');
    })

})