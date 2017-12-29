import Adapter from 'enzyme-adapter-react-16';
import Exercise from '../model/Exercise';
import ExercisePage from './ExercisePage';
import React from 'react';
import Task from '../model/Task';
import { buildTestExerciseWithTasks } from '../model/Exercise';
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

        wrapper.find('button.start').simulate('click');

        expect(wrapper.state('currentTask')).to.equal(0);
    });

    it('should go from 0 to 1 on done button click', () => {
        const wrapper = shallow(<ExercisePage exercise={
            buildTestExerciseWithTasks(1)
        }/>);
        wrapper.setState({'currentTask': 0});

        wrapper.find('button.done').simulate('click');

        expect(wrapper.state('currentTask')).to.equal(1);
    });

    it('should go from 1 to 2 on done button click', () => {
        const wrapper = shallow(<ExercisePage exercise={
            buildTestExerciseWithTasks(2)
        }/>);
        wrapper.setState({'currentTask': 1});

        wrapper.find('button.done').simulate('click');

        expect(wrapper.state('currentTask')).to.equal(2);
    });

});

describe('Exercise page states', () => {

    it('should not show done button before start', () => {
        const wrapper = shallow(<ExercisePage/>);

        expect(wrapper.find('button.done')).to.have.length(0);
    });

    it('should not show done button after last task', () => {
        const wrapper = shallow(<ExercisePage exercise={
            buildTestExerciseWithTasks(2)
        }/>);

        wrapper.setState({currentTask: 2});

        expect(wrapper.find('button.done')).to.have.length(0);
    });

    it('should not show start button after start', () => {
        const wrapper = shallow(<ExercisePage/>);

        wrapper.setState({'currentTask': 0});

        expect(wrapper.find('button.start')).to.have.length(0);
    });

    it('should show exercise title before the exercise', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise('::title::', '::irrelevant instructions::', [])
        }/>);

        expect(wrapper.find('h2').text()).to.equal('::title::');
    });

    it('should show exercise title during the exercise', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise('::title::', '::irrelevant instructions::', [])
        }/>);

        wrapper.setState({currentTask: 0});

        expect(wrapper.find('h2').text()).to.equal('::title::');
    });

    it('should show exercise title after the exercise', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::exercise title::',
                '::irrelevant exercise instructions::',
                [new Task('::irrelevant title::', '::irrelevant task instructions::')])
        }/>);

        wrapper.setState({currentTask: 1});

        expect(wrapper.find('h2').text()).to.equal('::exercise title::');
    });

    it('should show exercise instructions before start', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise('::irrelevant title::', '::instructions::', [])
        }/>);

        expect(wrapper.find('p').text()).to.equal('::instructions::');
    });

    it('should show task title during the task', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::irrelevant exercise title::',
                '::irrelevant exercise instructions::',
                [new Task('::task title::', '::irrelevant instructions::')])
        }/>);

        wrapper.setState({currentTask: 0});

        expect(wrapper.find('h3').text()).to.equal('::task title::');
    });

    it('should show task instructions during the task', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::irrelevant exercise title::',
                '::irrelevant exercise instructions::',
                [new Task('::irrelevant title::', '::task instructions::')])
        }/>);

        wrapper.setState({currentTask: 0});

        expect(wrapper.find('p').text()).to.equal('::task instructions::');
    });

});
