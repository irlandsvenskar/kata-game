import Task from './Task.js';

export default class Exercise {
    constructor(title, instructions, tasks) {
        this.tasks = tasks;
        this.title = title;
        this.instructions = instructions;
    }
}

const buildTestExerciseWithTasks = (taskCount) => {
    var tasks = [];
    for (var i = 0; i < taskCount; i++) {
        tasks.push(new Task('::irrelevant title::', '::irrelevant instructions::'));
    }
    return new Exercise(
        '::irrelevant exercise title::',
        '::irrelevant exercise instructions::',
        tasks);
}

const calculateTaskTime = (exerciseStartTime, taskFinishTimes, taskIndex) => {
    const endTime = taskFinishTimes[taskIndex];
    const startTime = taskIndex === 0 ?
        exerciseStartTime : taskFinishTimes[taskIndex - 1];
    return endTime - startTime;
};

const calculateTotalTime = (exerciseStartTime, taskFinishTimes) => {
    if (taskFinishTimes.length === 0) {
        return 0;
    }
    return taskFinishTimes[taskFinishTimes.length - 1] - exerciseStartTime;
};

export { buildTestExerciseWithTasks, calculateTaskTime, calculateTotalTime };
