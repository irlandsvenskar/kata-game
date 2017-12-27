import Adapter from 'enzyme-adapter-react-16';
import Exercise from '../model/Exercise';
import ExercisePage from './ExercisePage';
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});

describe('Show summary', () => {

    it('should show total time', () => {
        const wrapper = shallow(<ExercisePage
            exercise={new Exercise(['::task 1::', '::task 2::'])}/>);
        wrapper.setState({
            currentTask: 2,
            exerciseStartTime: 10,
            taskFinishTimes: [15, 35]
        });
        const totalTime = wrapper.find('span.totalTime').text();
        expect(totalTime).to.equal('25');
    });

    it('should show another total time', () => {
        const wrapper = shallow(<ExercisePage
            exercise={new Exercise(['::task 1::'])}/>);
        wrapper.setState({
            currentTask: 1,
            exerciseStartTime: 8,
            taskFinishTimes: [15]
        });
        const totalTime = wrapper.find('span.totalTime').text();
        expect(totalTime).to.equal('7');
    });

});
