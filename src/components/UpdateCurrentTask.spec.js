import Adapter from 'enzyme-adapter-react-16';
import ExercisePage from './ExercisePage';
import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

configure({adapter: new Adapter()});

describe('Update current task', () => {

    it('should be constructed with null', () => {
        const wrapper = shallow(<ExercisePage/>);
        expect(wrapper.state('currentTask')).to.equal(null);
    });

    it('should go from null to 0 on start button click', () => {
        const wrapper = shallow(<ExercisePage/>);
        const startButton = wrapper.find('button.start');
        startButton.simulate('click');
        expect(wrapper.state('currentTask')).to.equal(0);
    });

    it('should go from 0 to 1 on done button click', () => {
        const wrapper = shallow(<ExercisePage/>);
        wrapper.setState({'currentTask': 0});
        const doneButton = wrapper.find('button.done');
        doneButton.simulate('click');
        expect(wrapper.state('currentTask')).to.equal(1);
    });

    it('should go from 1 to 2 on done button click', () => {
        const wrapper = shallow(<ExercisePage/>);
        wrapper.setState({'currentTask': 1});
        const doneButton = wrapper.find('button.done');
        doneButton.simulate('click');
        expect(wrapper.state('currentTask')).to.equal(2);
    });

});

describe('Exercise page states', () => {

    it('should not show done button before start', () => {
        const wrapper = shallow(<ExercisePage/>);
        expect(wrapper.find('button.done')).to.have.length(0);
    });

    it('should not show start button after start', () => {
        const wrapper = shallow(<ExercisePage/>);
        wrapper.setState({'currentTask': 0});
        expect(wrapper.find('button.start')).to.have.length(0);
    });

});
