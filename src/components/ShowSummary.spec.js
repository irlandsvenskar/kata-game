import Adapter from 'enzyme-adapter-react-16';
import Exercise from '../model/Exercise';
import ExerciseSummaryPage from './ExerciseSummaryPage';
import React from 'react';
import Task from '../model/Task';
import { buildTestExerciseWithTasks } from '../model/Exercise';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

configure({adapter: new Adapter()});

describe('Show total time', () => {

    it('should show total time', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={10} taskFinishTimes={[15, 35]}/>);

        const totalTime = wrapper.find('span.totalTime').text();
        expect(totalTime).to.equal('0.025s');
    });

    it('should show another total time', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={8} taskFinishTimes={[15]}/>);

        const totalTime = wrapper.find('span.totalTime').text();
        expect(totalTime).to.equal('0.007s');
    });

});

describe('Show task times', () => {

    it('should show task time for single task', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={10} taskFinishTimes={[15]}/>);

        const taskTime = wrapper.find('span.taskTime').at(0).text();
        expect(taskTime).to.equal('0.005s');
    });

    it('should show task times for multiple tasks', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={7} taskFinishTimes={[15, 27]}/>);

        const taskTimes = wrapper.find('span.taskTime');
        expect(taskTimes.at(0).text()).to.equal('0.008s');
        expect(taskTimes.at(1).text()).to.equal('0.012s');
    });

});
