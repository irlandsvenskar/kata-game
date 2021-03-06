import Adapter from 'enzyme-adapter-react-16';
import Exercise from '../model/Exercise';
import ExercisePage from './ExercisePage';
import ExerciseStartPage from './ExerciseStartPage';
import ExerciseSummaryPage from './ExerciseSummaryPage';
import ExerciseTaskPage from './ExerciseTaskPage';
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

    it('should go from null to 0 on exercise start', () => {
        const wrapper = shallow(<ExercisePage/>);

        wrapper.instance().startExercise();

        expect(wrapper.state('currentTask')).to.equal(0);
    });

    it('should trigger callback on start button click', () => {
        var triggered = false;
        const callback = () => { triggered = true; };
        const wrapper = shallow(<ExerciseStartPage startExercise={callback}/>);

        wrapper.find('button.start').simulate('click');

        expect(triggered).to.equal(true);
    });

    it('should go from 0 to 1 on task done', () => {
        const wrapper = shallow(<ExercisePage exercise={
            buildTestExerciseWithTasks(1)
        }/>);
        wrapper.setState({'currentTask': 0});

        wrapper.instance().taskDone();

        expect(wrapper.state('currentTask')).to.equal(1);
    });

    it('should go from 1 to 2 on task done', () => {
        const wrapper = shallow(<ExercisePage exercise={
            buildTestExerciseWithTasks(2)
        }/>);
        wrapper.setState({'currentTask': 1});

        wrapper.instance().taskDone();

        expect(wrapper.state('currentTask')).to.equal(2);
    });

});

describe('Task transitions', () => {

    it('should show the first task', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::irrelevant title::',
                '::irrelevant instructions::',
                [new Task('::task title::', '::irrelevant instructions::')])
        }/>);

        wrapper.setState({currentTask: 0});

        expect(wrapper.find(ExerciseTaskPage).prop('taskTitle')).to.equal('::task title::');
    });

    it('should show the second task after the first', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::irrelevant title::',
                '::irrelevant instructions::',
                [
                    new Task('::task title 1::', '::irrelevant instructions::'),
                    new Task('::task title 2::', '::irrelevant instructions::')
                ])
        }/>);

        wrapper.setState({currentTask: 0});
        expect(wrapper.find(ExerciseTaskPage).prop('taskTitle')).to.equal('::task title 1::');

        wrapper.instance().taskDone();
        wrapper.update();
        expect(wrapper.find(ExerciseTaskPage).prop('taskTitle')).to.equal('::task title 2::');
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

    it('should show ExerciseStartPage before the exercise', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise('::irrelevant title::', '::irrelevant instructions::', [])
        }/>);

        expect(wrapper.find(ExerciseStartPage)).to.have.length(1);
    });

    it('should show ExerciseSummaryPage after the exercise', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::exercise title::',
                '::irrelevant exercise instructions::',
                [new Task('::irrelevant title::', '::irrelevant task instructions::')])
        }/>);

        wrapper.setState({currentTask: 1});

        expect(wrapper.find(ExerciseSummaryPage)).to.have.length(1);
    });

    it('should show ExerciseTaskPage during the exercise', () => {
        const wrapper = shallow(<ExercisePage exercise={
            new Exercise(
                '::exercise title::',
                '::irrelevant instructions::',
                [new Task('::irrelevant title::', '::irrelevant instructions::')])
        }/>);

        wrapper.setState({currentTask: 0});

        expect(wrapper.find(ExerciseTaskPage)).to.have.length(1);
    });

    it('should show exercise title in ExerciseStartPage', () => {
        const wrapper = shallow(<ExerciseStartPage title='::title::'/>);

        expect(wrapper.find('h2').text()).to.equal('::title::');
    });

    it('should show exercise instructions in ExerciseStartPage', () => {
        const wrapper = shallow(<ExerciseStartPage instructions='::instructions::'/>);

        expect(wrapper.find('p').text()).to.equal('::instructions::');
    });

    it('should show exercise title in ExerciseSummaryPage', () => {
        const wrapper = shallow(<ExerciseSummaryPage title='::title::'/>);

        expect(wrapper.find('h2').text()).to.equal('::title::');
    });

    it('should show exercise title in ExerciseTaskPage', () => {
        const wrapper = shallow(<ExerciseTaskPage exerciseTitle='::exercise title::'/>);

        expect(wrapper.find('h2').text()).to.equal('::exercise title::');
    });

    it('should show task title in ExerciseTaskPage', () => {
        const wrapper = shallow(<ExerciseTaskPage taskTitle='::task title::'/>);

        expect(wrapper.find('h3').text()).to.equal('::task title::');
    });

    it('should show task instructions in ExerciseTaskPage', () => {
        const wrapper = shallow(<ExerciseTaskPage instructions='::task instructions::'/>);

        expect(wrapper.find('p').text()).to.equal('::task instructions::');
    });

});
