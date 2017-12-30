import React from 'react';
import { calculateTaskTime, calculateTotalTime } from '../model/Exercise';

export default class ExerciseSummaryPage extends React.Component {
    render() {
        const startTime = this.props.exerciseStartTime;
        const finishTimes = this.props.taskFinishTimes || [];
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
                <h2>{this.props.title}</h2>
                <h3>Task times</h3>
                <ol>{taskTimes}</ol>
                <h3>Total time</h3>
                <span className='totalTime'>{totalTime}</span>
            </div>
        );
    }
}
