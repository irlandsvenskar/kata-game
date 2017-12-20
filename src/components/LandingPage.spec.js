import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import LandingPage from './LandingPage';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<LandingPage/>', () => {

    it('should say \'So Simple!\'', () => {
        const wrapper = shallow(<LandingPage/>);
        const actual = wrapper.find('h1').text();
        const expected = 'So Simple!';

        expect(actual).to.equal(expected);
    });

    it('should have a header for setup instructions', () => {
        const wrapper = shallow(<LandingPage/>);
        const actual = wrapper.find('h2').text();
        const expected = 'Instructions';

        expect(actual).to.equal(expected);
    });

    it('should have setup instructions', () => {
        const wrapper = shallow(<LandingPage/>);
        const actual = wrapper.find('p').text();
        const expected = 'The setup instructions go here...';

        expect(actual).to.equal(expected);
    });

    it('should have a \'Start!\' button', () => {
        const wrapper = shallow(<LandingPage/>);
        const actual = wrapper.find('button').text();
        const expected = 'Start!';

        expect(actual).to.equal(expected);
    });

});
