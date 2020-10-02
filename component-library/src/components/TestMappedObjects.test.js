import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import TestMappedObjects from './TestMappedObjects';
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Test functions', () => {
    it('should display the correct button to be tested', () => {
        const { getByTestId } = render(<TestMappedObjects />);
        expect(getByTestId('1')).toBeTruthy();
    })

    it("should display the correct cost when add button is clicked", () => {
        const wrapper = mount(<TestMappedObjects />); // render everything
        const buttons = wrapper.find(".add");
        buttons.at(0).simulate("click");
        expect(wrapper.find(".total-price").at(0).text()).toBe("10");
    });

})