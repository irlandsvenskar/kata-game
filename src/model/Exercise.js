export default class Exercise {

    constructor(startTime, tasks) {
        this.startTime = startTime;
        this.tasks = tasks;
    }

    getTotalTime() {
        return calculateTotalTime(this.startTime, this.tasks.map(t => t.endTime));
    }

    getTaskTime(taskIndex) {
        return calculateTaskTime(this.startTime, this.tasks.map(t => t.endTime), taskIndex);
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
