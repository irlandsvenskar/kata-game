export default class Exercise {
    constructor(tasks) {
        this.tasks = tasks;
        this.title = '::exercise title::';
        this.instructions = '::exercise instructions::';
    }
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

export { calculateTaskTime, calculateTotalTime };
