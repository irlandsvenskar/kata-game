import Adapter from 'enzyme-adapter-react-16';
import ExercisePage from './ExercisePage';
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';

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
