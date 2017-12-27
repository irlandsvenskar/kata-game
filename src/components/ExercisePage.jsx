import Exercise from '../model/Exercise';
import React from 'react';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        this.exercise = props.exercise || new Exercise(null, []);
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
            return <h2>Done!</h2>
        }
    }
}
