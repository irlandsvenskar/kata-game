import { expect } from 'chai';
import { completeTask, startExercise } from '../constants/actions';
import { reduce } from './Exercise';
import Exercise from '../model/Exercise';

describe('Reduce exercise', () => {

    it('should capture start time when starting an exercise', () => {
        const stateBefore = {exercise: new Exercise(null, [])};
        const stateAfter = {exercise: new Exercise(3, [])};
        const actual = reduce(stateBefore, startExercise(3));
        expect(actual).to.deep.equal(stateAfter);
    });

    it('should capture task time when completing a task', () => {
        const stateBefore = {exercise: new Exercise(0, [
            {name: '::irrelevant task name::'}
        ])};
        const stateAfter = {exercise: new Exercise(0, [
            {name: '::irrelevant task name::', endTime: 20}
        ])};
        const actual = reduce(stateBefore, completeTask(0, 20));
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
        const actual = reduce(stateBefore, completeTask(1, 10));
        expect(actual).to.deep.equal(stateAfter);
    });

});
