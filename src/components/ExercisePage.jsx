import Exercise from '../model/Exercise';
import ExerciseStartPage from './ExerciseStartPage';
import ExerciseSummaryPage from './ExerciseSummaryPage';
import React from 'react';

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
    showCurrentTaskPage = () => {
        const currentTask = this.exercise.tasks[this.state.currentTask];
        return (
            <div>
                <h2>{this.exercise.title}</h2>
                <h3>{currentTask.title}</h3>
                <p>{currentTask.instructions}</p>
                <button className='done' onClick={this.taskDone}>Done!</button>
            </div>
        );
    }
    render() {
        if (this.state.currentTask === null) {
            return <ExerciseStartPage
                title={this.exercise.title}
                instructions={this.exercise.instructions}
                startExercise={this.startExercise}
                />
        } else if (this.state.currentTask < this.exercise.tasks.length) {
            return this.showCurrentTaskPage();
        } else {
            return <ExerciseSummaryPage
                title={this.exercise.title}
                exerciseStartTime={this.state.exerciseStartTime}
                taskFinishTimes={this.state.taskFinishTimes}
                />
        }
    }
}
