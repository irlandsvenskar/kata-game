import Exercise from '../model/Exercise';
import React from 'react';
import { calculateTotalTime } from '../model/Exercise';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        this.exercise = props.exercise || new Exercise([]);
        this.timeProvider = props.timeProvider || Date.now
        this.heading = props.heading;
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
                    <h2>{this.heading}</h2>
                    <button className='start' onClick={this.startExercise}>Start!</button>
                </div>
            );
        } else if (this.state.currentTask < this.exercise.tasks.length) {
            return (
                <button className='done' onClick={this.taskDone}>Done!</button>
            );
        } else {
            const totalTime = calculateTotalTime(
                this.state.exerciseStartTime,
                this.state.taskFinishTimes);
            return (
                <div>
                    <h2>Done!</h2>
                    <h3>Total time</h3>
                    <span className='totalTime'>{totalTime}</span>
                </div>
            );
        }
    }
}
