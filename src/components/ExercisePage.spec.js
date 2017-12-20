import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ExercisePage from './ExercisePage';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<ExercisePage/>', () => {

    it('should display an error if there are no tasks', () => {
        const wrapper = shallow(<ExercisePage/>);
        const error = wrapper.find('p').text();
        expect(error).to.equal('This exercise has no tasks!');
    });

});
