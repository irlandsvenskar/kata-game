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
        const startButton = wrapper.find('button.start');
        startButton.simulate('click');
        expect(wrapper.state('currentTask')).toEqual(0);
    });

    it('should go from 0 to 1 on done button click', () => {
        const wrapper = shallow(<ExercisePage/>);
        wrapper.setState({'currentTask': 0});
        const doneButton = wrapper.find('button.done');
        doneButton.simulate('click');
        expect(wrapper.state('currentTask')).toEqual(1);
    });

});
