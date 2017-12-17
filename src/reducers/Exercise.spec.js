import { expect } from 'chai';
import { COMPLETE_TASK, START_EXERCISE } from '../constants/actions.js';
import { reduce } from './Exercise.js';
import Exercise from '../model/Exercise.js';

describe('Reduce exercise', () => {

    it('should capture start time when starting an exercise', () => {
        const stateBefore = {exercise: new Exercise(null, [])};
        const stateAfter = {exercise: new Exercise(3, [])};
        const action = {type: START_EXERCISE, time: 3};
        const actual = reduce(stateBefore, action);
        expect(actual).to.deep.equal(stateAfter);
    });

    it('should capture task time when completing a task', () => {
        const stateBefore = {exercise: new Exercise(0, [
            {name: '::irrelevant task name::'}
        ])};
        const stateAfter = {exercise: new Exercise(0, [
            {name: '::irrelevant task name::', endTime: 20}
        ])};
        const action = {type: COMPLETE_TASK, index: 0, time: 20};
        const actual = reduce(stateBefore, action);
        expect(actual).to.deep.equal(stateAfter);
    });

    it('should capture task time when completing non-first task', () => {
        const stateBefore = {exercise: new Exercise(0, [
            {name: '::irrelevant task name::'},
            {name: '::irrelevant task name::'}
        ])};
        const stateAfter = {exercise: new Exercise(0, [
            {name: '::irrelevant task name::'},
            {name: '::irrelevant task name::', endTime: 10}
        ])};
        const action = {type: COMPLETE_TASK, index: 1, time: 10};
        const actual = reduce(stateBefore, action);
        expect(actual).to.deep.equal(stateAfter);
    });

});
