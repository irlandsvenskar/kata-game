import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Exercise from '../model/Exercise';
import ExercisePage from './ExercisePage';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<ExercisePage/>', () => {

    it('should display an error if there are no tasks', () => {
        const exercise = new Exercise(0, []);
        const wrapper = shallow(<ExercisePage exercise={exercise}/>);
        const error = wrapper.find('p').text();
        expect(error).to.equal('This exercise has no tasks!');
    });

    it('should show the first task', () => {
        const exercise = new Exercise(0, [{'name': 'Task 1'}]);
        const wrapper = shallow(<ExercisePage exercise={exercise}/>);
        const heading = wrapper.find('h1').text();
        expect(heading).to.equal('Task 1');
    });

});
