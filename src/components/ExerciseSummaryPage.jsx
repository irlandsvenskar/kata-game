import React from 'react';
import { calculateTaskTime, calculateTotalTime } from '../model/Exercise';

export default class ExerciseSummaryPage extends React.Component {
    render() {
        const startTime = this.props.exerciseStartTime;
        const taskDetails = this.props.taskDetails || [];
        const taskNames = taskDetails.map(t => t.taskName);
        const finishTimes = taskDetails.map(t => t.taskFinishTime);
        const taskTimes = finishTimes.map((t, index) => {
            const duration = calculateTaskTime(startTime, finishTimes, index);
            const taskName = taskNames[index];
            return (
                <li key={index}>
                    <span className='taskName'>{taskName}</span>:&nbsp;
                    <span className='taskTime'>{formatTime(duration)}</span>
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
                <span className='totalTime'>{formatTime(totalTime)}</span>
            </div>
        );
    }
}

const formatTime = (timeInMillis) => {
    // REFACTOR: Could use standard string formatting here
    if (timeInMillis % 10 !== 0) {
        return timeInMillis / 1000 + 's'
    } else if (timeInMillis % 100 !== 0) {
        return timeInMillis / 1000 + '0s'
    } else if (timeInMillis % 1000 !== 0) {
        return timeInMillis / 1000 + '00s'
    } else {
        return timeInMillis / 1000 + '.000s'
    }
}

export { formatTime };
