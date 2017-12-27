import { calculateTaskTime, calculateTotalTime } from './Exercise';
import { expect } from 'chai';

describe('Exercise time', () => {

    it('should calculate total time for empty tasks', () => {
        expect(calculateTotalTime(0, [])).to.equal(0);
    });

    it('should calculate total time for single task', () => {
        expect(calculateTotalTime(0, [10])).to.equal(10);
    });

    it('should calculate total time for multiple tasks', () => {
        expect(calculateTotalTime(0, [10, 20])).to.equal(20);
    });

});

describe('Task time', () => {

    it('should calculate task time for first task', () => {
        expect(calculateTaskTime(0, [5], 0)).to.equal(5);
    });

    it('should calculate task time for non-first task', () => {
        expect(calculateTaskTime(0, [5, 12], 1)).to.equal(7);
    });

});
