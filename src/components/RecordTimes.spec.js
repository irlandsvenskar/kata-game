import Adapter from 'enzyme-adapter-react-16';
import Exercise from '../model/Exercise';
import ExercisePage from './ExercisePage';
import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

configure({adapter: new Adapter()});

describe('Record start time', () => {

    it('should begin with a null start time', () => {
        const wrapper = shallow(<ExercisePage/>);
        expect(wrapper.state('exerciseStartTime')).to.equal(null);
    });

    it('should record the start time', () => {
        const IRRELEVANT_NUMERIC_VALUE = 2;
        const timeProvider = () => IRRELEVANT_NUMERIC_VALUE;
        const wrapper = shallow(<ExercisePage timeProvider={timeProvider}/>);
        const startButton = wrapper.find('button.start');
        startButton.simulate('click');
        const startTime = wrapper.state('exerciseStartTime');
        expect(startTime).to.equal(IRRELEVANT_NUMERIC_VALUE);
    });

    it('should record another start time', () => {
        const IRRELEVANT_NUMERIC_VALUE = 5;
        const timeProvider = () => IRRELEVANT_NUMERIC_VALUE;
        const wrapper = shallow(<ExercisePage timeProvider={timeProvider}/>);
        const startButton = wrapper.find('button.start');
        startButton.simulate('click');
        const startTime = wrapper.state('exerciseStartTime');
        expect(startTime).to.equal(IRRELEVANT_NUMERIC_VALUE);
    });

    it('should record a start time when no timeProvider is given', () => {
        const wrapper = shallow(<ExercisePage/>);
        const startButton = wrapper.find('button.start');
        startButton.simulate('click');
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
        const IRRELEVANT_NUMERIC_VALUE = 123;
        const timeProvider = () => IRRELEVANT_NUMERIC_VALUE;
        const wrapper = shallow(
            <ExercisePage
                exercise={new Exercise(['::some task::'])}
                timeProvider={timeProvider}/>
        );
        wrapper.setState({currentTask: 0});
        wrapper.find('button.done').simulate('click');
        const finishTimes = wrapper.state('taskFinishTimes');
        expect(finishTimes).to.deep.equal([IRRELEVANT_NUMERIC_VALUE]);
    });

    it('should record the task finish time when no timeProvider is given', () => {
        const wrapper = shallow(
            <ExercisePage exercise={new Exercise(['::some task::'])}/>
        );
        wrapper.setState({currentTask: 0});
        wrapper.find('button.done').simulate('click');
        const finishTimes = wrapper.state('taskFinishTimes');
        expect(finishTimes).to.be.an('array').of.length(1);
        expect(finishTimes[0]).to.be.a('number');
    });

    it('should record a second task finish time', () => {
        const IRRELEVANT_NUMERIC_VALUE_1 = 123;
        const IRRELEVANT_NUMERIC_VALUE_2 = 456;
        const timeProvider = () => IRRELEVANT_NUMERIC_VALUE_2;
        const wrapper = shallow(
            <ExercisePage
                exercise={new Exercise(['::some task::', '::some other task::'])}
                timeProvider={timeProvider}/>
        );
        wrapper.setState({
            currentTask: 0,
            taskFinishTimes: [IRRELEVANT_NUMERIC_VALUE_1]
        });
        wrapper.find('button.done').simulate('click');
        const finishTimes = wrapper.state('taskFinishTimes');
        expect(finishTimes).to.deep.equal(
            [IRRELEVANT_NUMERIC_VALUE_1, IRRELEVANT_NUMERIC_VALUE_2]);
    });

});
