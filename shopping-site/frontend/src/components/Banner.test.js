import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

import Banner from "./Banner";

let wrapper;
beforeEach(() => {
    wrapper = mount(<Router><Banner props={mockData} /></Router>);
});

afterEach(() => {
    wrapper = null;
});

const mockData = [
    {
        id: 1,
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        imgUrl: require('../images/trooper.jpg')
    },
    {
        id: 2,
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        imgUrl: require('../images/responsive.jpg')
    },
    {
        id: 3,
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        imgUrl: require('../images/code.jpg')
    }
]

describe('it renders correct elements', () => {

    it('should render the correct content', () => {

        expect(wrapper.find('.banner__content').at(0).text()).toBe('Title 3Subtitle 3Contact me');
        expect(wrapper.find('.banner__content').at(1).text()).toBe('Title 1Subtitle 1Contact me');
        expect(wrapper.find('.banner__content').at(2).text()).toBe('Title 2Subtitle 2Contact me');
    });

    it('should render the correct button', () => {
        expect(wrapper.find('.btn').at(0).text()).toBe('Contact me');
    });

    it('should go to the correct page when clicking the button', () => {
        wrapper.find('.btn').at(0).simulate('click', {});

    })
})
