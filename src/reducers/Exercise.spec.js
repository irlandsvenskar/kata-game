import { completeTask, startExercise } from '../constants/actions';
import { expect } from 'chai';
import { reduce } from './Exercise';
import Exercise from '../model/Exercise';

describe('Reduce exercise', () => {

    it('should capture start time when starting an exercise', () => {
        const stateBefore = {exerciseStartTime: null, taskFinishTimes: []};
        const stateAfter = {exerciseStartTime: 3, taskFinishTimes: []};
        const actual = reduce(stateBefore, startExercise(3));
        expect(actual).to.deep.equal(stateAfter);
    });

    it('should capture task time when completing a task', () => {
        const stateBefore = {exerciseStartTime: 0, taskFinishTimes: []};
        const stateAfter = {exerciseStartTime: 0, taskFinishTimes: [20]};
        const actual = reduce(stateBefore, completeTask(0, 20));
        expect(actual).to.deep.equal(stateAfter);
    });

    it('should capture task time when completing non-first task', () => {
        const stateBefore = {exerciseStartTime: 0, taskFinishTimes: [2]};
        const stateAfter = {exerciseStartTime: 0, taskFinishTimes: [2, 10]};
        const actual = reduce(stateBefore, completeTask(1, 10));
        expect(actual).to.deep.equal(stateAfter);
    });

});
