import React from 'react';
import { calculateTaskTime, calculateTotalTime } from '../model/Exercise';

export default class ExerciseSummaryPage extends React.Component {
    constructor(props) {
        super(props);
        this.exerciseStartTime = props.exerciseStartTime;
        this.taskFinishTimes = props.taskFinishTimes || [];
        this.title = props.title;
    }
    render() {
        const startTime = this.exerciseStartTime;
        const finishTimes = this.taskFinishTimes;
        const taskTimes = finishTimes.map((t, index) => {
            const duration = calculateTaskTime(startTime, finishTimes, index);
            return (
                <li key={index}>
                    <span className='taskTime'>{duration}</span>
                </li>
            );
        });
        const totalTime = calculateTotalTime(startTime, finishTimes);
        return (
            <div>
                <h2>{this.title}</h2>
                <h3>Task times</h3>
                <ol>{taskTimes}</ol>
                <h3>Total time</h3>
                <span className='totalTime'>{totalTime}</span>
            </div>
        );
    }
}
