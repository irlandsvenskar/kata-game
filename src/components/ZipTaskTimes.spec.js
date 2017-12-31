import Exercise from '../model/Exercise';
import Task from '../model/Task';
import { expect } from 'chai';

const zipTaskTimes = (tasks, taskTimes) => {
    var zipped = [];
    for (var i = 0; i < tasks.length; i++) {
        zipped.push({
            'taskName': tasks[i].title,
            'taskFinishTime': taskTimes[i]
        });
    }
    return zipped;
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

    it('should zip multiple tasks and times', () => {
        const irrelevantTime1 = 12;
        const irrelevantTime2 = 34;
        const tasks = [
            new Task('::task 1::', '::irrelevant instructions::'),
            new Task('::task 2::', '::irrelevant instructions::')
        ];
        const taskTimes = [irrelevantTime1, irrelevantTime2];

        const zipped = zipTaskTimes(tasks, taskTimes);

        expect(zipped).to.deep.equal([
            {'taskName': '::task 1::', 'taskFinishTime': irrelevantTime1},
            {'taskName': '::task 2::', 'taskFinishTime': irrelevantTime2},
        ]);
    });

});
