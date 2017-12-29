import Adapter from 'enzyme-adapter-react-16';
import Exercise from '../model/Exercise';
import ExercisePage from './ExercisePage';
import React from 'react';
import Task from '../model/Task';
import { buildTestExerciseWithTasks } from '../model/Exercise';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

configure({adapter: new Adapter()});

describe('Record start time', () => {

    it('should begin with a null start time', () => {
        const wrapper = shallow(<ExercisePage/>);

        expect(wrapper.state('exerciseStartTime')).to.equal(null);
    });

    it('should record the start time', () => {
        const timeProvider = () => 2; // Irrelevant value
        const wrapper = shallow(<ExercisePage timeProvider={timeProvider}/>);

        wrapper.find('button.start').simulate('click');

        const startTime = wrapper.state('exerciseStartTime');
        expect(startTime).to.equal(2);
    });

    it('should record another start time', () => {
        const timeProvider = () => 5; // Irrelevant value
        const wrapper = shallow(<ExercisePage timeProvider={timeProvider}/>);

        wrapper.find('button.start').simulate('click');

        const startTime = wrapper.state('exerciseStartTime');
        expect(startTime).to.equal(5);
    });

    it('should record a start time when no timeProvider is given', () => {
        const wrapper = shallow(<ExercisePage/>);

        wrapper.find('button.start').simulate('click');

        const startTime = wrapper.state('exerciseStartTime');
        expect(startTime).to.be.a('number');
    });

});

describe('Record task time', () => {

    it('should begin with an empty list', () => {
        const wrapper = shallow(<ExercisePage/>);

        expect(wrapper.state('taskFinishTimes')).to.be.an('array').that.is.empty;
    });

    it('should record the task finish time', () => {
        const timeProvider = () => 123; // Irrelevant value
        const wrapper = shallow(<ExercisePage
            exercise={buildTestExerciseWithTasks(1)}
            timeProvider={timeProvider}/>);
        wrapper.setState({currentTask: 0});

        wrapper.find('button.done').simulate('click');

        const finishTimes = wrapper.state('taskFinishTimes');
        expect(finishTimes).to.deep.equal([123]);
    });

    it('should record the task finish time when no timeProvider is given', () => {
        const wrapper = shallow(<ExercisePage exercise={
            buildTestExerciseWithTasks(1)
        }/>);
        wrapper.setState({currentTask: 0});

        wrapper.find('button.done').simulate('click');

        const finishTimes = wrapper.state('taskFinishTimes');
        expect(finishTimes).to.be.an('array').of.length(1);
        expect(finishTimes[0]).to.be.a('number');
    });

    it('should record a second task finish time', () => {
        const timeProvider = () => 456; // Irrelevant value
        const wrapper = shallow(<ExercisePage
            exercise={buildTestExerciseWithTasks(2)}
            timeProvider={timeProvider}/>);
        wrapper.setState({
            currentTask: 0,
            taskFinishTimes: [123] // Irrelevant value
        });

        wrapper.find('button.done').simulate('click');

        const finishTimes = wrapper.state('taskFinishTimes');
        expect(finishTimes).to.deep.equal([123, 456]);
    });

});
