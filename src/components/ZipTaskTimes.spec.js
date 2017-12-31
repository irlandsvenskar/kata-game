import Exercise from '../model/Exercise';
import Task from '../model/Task';
import { expect } from 'chai';

const zipTaskTimes = (tasks, taskTimes) => {
    if (tasks.length === 0)
        return [];
    else
        return [{'taskName': tasks[0].title, 'taskFinishTime': taskTimes[0]}];
}

describe('Zip task names and times', () => {

    it('should zip empty', () => {
        expect(zipTaskTimes([], [])).to.deep.equal([]);
    });

    it('should zip singleton task and time', () => {
        const irrelevantValue = 1234;
        const tasks = [
            new Task('::task name::', '::irrelevant instructions::')
        ];
        const taskTimes = [irrelevantValue];

        const zipped = zipTaskTimes(tasks, taskTimes);

        expect(zipped).to.deep.equal([
            {'taskName': '::task name::', 'taskFinishTime': irrelevantValue}
        ]);
    });

});
