import Exercise from '../model/Exercise';
import React from 'react';
import { calculateTaskTime, calculateTotalTime } from '../model/Exercise';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        // REFACTOR: Make exercise a required property
        this.exercise = props.exercise || new Exercise('::title::', '::instructions::', []);
        this.timeProvider = props.timeProvider || Date.now
        this.state = {
            currentTask: null,
            exerciseStartTime: null,
            taskFinishTimes: []
        };
    }
    startExercise = () => {
        this.setState({currentTask: 0, exerciseStartTime: this.timeProvider()});
    }
    taskDone = () => {
        this.setState((prevState, props) => ({
            currentTask: prevState.currentTask + 1,
            taskFinishTimes: prevState.taskFinishTimes.concat([this.timeProvider()])
        }));
    }
    render() {
        if (this.state.currentTask === null) {
            return (
                <div>
                    <h2>{this.exercise.title}</h2>
                    <p>{this.exercise.instructions}</p>
                    <button className='start' onClick={this.startExercise}>Start!</button>
                </div>
            );
        } else if (this.state.currentTask < this.exercise.tasks.length) {
            const task = this.exercise.tasks[this.state.currentTask];
            return (
                <div>
                    <h2>{this.exercise.title}</h2>
                    <h3>{task.title}</h3>
                    <p>{task.instructions}</p>
                    <button className='done' onClick={this.taskDone}>Done!</button>
                </div>
            );
        } else {
            const startTime = this.state.exerciseStartTime;
            const finishTimes = this.state.taskFinishTimes;
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
                    <h2>{this.exercise.title}</h2>
                    <h3>Task times</h3>
                    <ol>{taskTimes}</ol>
                    <h3>Total time</h3>
                    <span className='totalTime'>{totalTime}</span>
                </div>
            );
        }
    }
}
