import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SCard from './SCard';
import Home from '../pages/Home';

configure({ adapter: new Adapter() });

describe('Test SCard component UI', () => {
    it('should contain 3 buttons', () => {
        const wrapper = shallow(<SCard />);
        expect(wrapper.find('button').length).toBe(3);
    })

    it('should contain correct text', () => {
        const wrapper = shallow(<SCard key={1}
            id={1}
            title={'sock'}
            subtitle={'men\'s sock'}
            price={10}
            quantity={2}
            itemTotalPrice={20}
        />);
        expect(wrapper.find('.title').text()).toBe('1. sock');
        expect(wrapper.find('.subtitle').text()).toBe('men\'s sock');
        expect(wrapper.find('.shop-card--price').text()).toBe('Price: £10');
        expect(wrapper.find('.shop-card--total-price').text()).toBe('Total price: 20');
    })

    it('should display +1 on add button', () => {
        const wrapper = shallow(<SCard />);
        expect(wrapper.find('button').find('.add').text()).toBe('+ 1');
    })
})
