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
            exerciseStartTime={10}
            taskDetails={[
                {taskName: '::irrelevant::', taskFinishTime: 15},
                {taskName: '::irrelevant::', taskFinishTime: 35}
            ]}/>);

        const totalTime = wrapper.find('span.totalTime').text();
        expect(totalTime).to.equal('0.025s');
    });

    it('should show another total time', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={8}
            taskDetails={[
                {taskName: '::irrelevant::', taskFinishTime: 15}
            ]}/>);

        const totalTime = wrapper.find('span.totalTime').text();
        expect(totalTime).to.equal('0.007s');
    });

});

describe('Show task names', () => {

    it('should show task name for single task', () => {
        const irrelevantValue = 1;
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={irrelevantValue}
            taskDetails={[
                {taskName: '::task name::', taskFinishTime: irrelevantValue}
            ]}/>);

        const taskName = wrapper.find('span.taskName').at(0).text();

        expect(taskName).to.equal('::task name::');
    });

    it('should show task name for multiple tasks', () => {
        const irrelevantValue = 1;
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={irrelevantValue}
            taskDetails={[
                {taskName: '::task 1::', taskFinishTime: irrelevantValue},
                {taskName: '::task 2::', taskFinishTime: irrelevantValue}
            ]}/>);

        const taskNames = wrapper.find('span.taskName');

        expect(taskNames.at(0).text()).to.equal('::task 1::');
        expect(taskNames.at(1).text()).to.equal('::task 2::');
    });

});

describe('Show task times', () => {

    it('should show task time for single task', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={10}
            taskDetails={[
                {taskName: '::irrelevant::', taskFinishTime: 15}
            ]}/>);

        const taskTime = wrapper.find('span.taskTime').at(0).text();
        expect(taskTime).to.equal('0.005s');
    });

    it('should show task times for multiple tasks', () => {
        const wrapper = shallow(<ExerciseSummaryPage
            exerciseStartTime={7}
            taskDetails={[
                {taskName: '::irrelevant::', taskFinishTime: 15},
                {taskName: '::irrelevant::', taskFinishTime: 27}
            ]}/>);

        const taskTimes = wrapper.find('span.taskTime');
        expect(taskTimes.at(0).text()).to.equal('0.008s');
        expect(taskTimes.at(1).text()).to.equal('0.012s');
    });

});
