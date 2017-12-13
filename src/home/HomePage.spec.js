import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import HomePage from './HomePage';

describe('<HomePage />', () => {

    it('should say \'So Simple!\'', () => {
        const wrapper = shallow(<HomePage />);
        const actual = wrapper.find('h1').text();
        const expected = 'So Simple!';

        expect(actual).to.equal(expected);
    });

});
