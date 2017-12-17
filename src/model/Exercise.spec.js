import { expect } from 'chai';
import Exercise from './Exercise.js';

describe('Exercise time', () => {

    it('should calculate total time for empty tasks', () => {
        const exercise = new Exercise(0, []);
        expect(exercise.getTotalTime()).to.equal(0);
    });

    it('should calculate total time for single task', () => {
        const exercise = new Exercise(0, [
            {name: '::irrelevant-task-name::', endTime: 10}
        ]);
        expect(exercise.getTotalTime()).to.equal(10);
    });

    it('should calculate total time for multiple tasks', () => {
        const exercise = new Exercise(0, [
            {name: '::irrelevant-task-name::', endTime: 10},
            {name: '::irrelevant-task-name::', endTime: 20}
        ]);
        expect(exercise.getTotalTime()).to.equal(20);
    });

});

describe('Task time', () => {

    it('should calculate task time for first task', () => {
        const exercise = new Exercise(0, [
            {name: '::irrelevant-task-name::', endTime: 5}
        ]);
        expect(exercise.getTaskTime(0)).to.equal(5);
    });

    it('should calculate task time for non-first task', () => {
        const exercise = new Exercise(0, [
            {name: '::irrelevant-task-name::', endTime: 5},
            {name: '::irrelevant-task-name::', endTime: 12}
        ]);
        expect(exercise.getTaskTime(1)).to.equal(7);
    });

});
