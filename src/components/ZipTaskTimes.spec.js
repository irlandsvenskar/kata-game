import Exercise from '../model/Exercise';
import { expect } from 'chai';

const zipTaskTimes = (tasks, taskTimes) => {
    return [];
}

describe('Zip task names and times', () => {

    it('should zip empty', () => {
        const exercise = new Exercise(
            '::irrelevant title::', '::irrelevant instructions::', []);
        const taskTimes = [];

        const zipped = zipTaskTimes(exercise, taskTimes);

        expect(zipped).to.deep.equal([]);
    });

});
