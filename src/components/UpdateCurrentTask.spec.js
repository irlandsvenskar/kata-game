import Adapter from 'enzyme-adapter-react-16';
import ExercisePage from './ExercisePage';
import React from 'react';
import { configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});

describe('Update current task', () => {

    it('should be constructed with null', () => {
        const wrapper = shallow(<ExercisePage/>);
        expect(wrapper.state('currentTask')).toBeNull();
    });

    it('should go from null to 0 on start button click', () => {
        const wrapper = shallow(<ExercisePage/>);
        const startButton = wrapper.find('button');
        startButton.simulate('click');
        expect(wrapper.state('currentTask')).toEqual(0);
    });

});
