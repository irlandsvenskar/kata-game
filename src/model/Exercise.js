export default class Exercise {

    constructor(startTime, tasks) {
        this.startTime = startTime;
        this.tasks = tasks;
    }

    getTotalTime() {
        if (this.tasks.length == 0) {
            return 0;
        }
        const endTime = this.tasks[this.tasks.length - 1].endTime;
        return endTime - this.startTime;
    }

    getTaskTime(taskIndex) {
        const endTime = this.tasks[taskIndex].endTime
        const startTime = taskIndex == 0 ?
            this.startTime : this.tasks[taskIndex - 1].endTime;
        return endTime - startTime;
    }

}
