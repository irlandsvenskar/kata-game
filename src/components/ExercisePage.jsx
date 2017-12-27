import React from 'react';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        this.heading = props.heading;
        this.state = {currentTask: null};
    }
    startExercise = () => {
        this.setState({currentTask: 0})
    }
    taskDone = () => {
        this.setState((prevState, props) => ({
            currentTask: prevState.currentTask + 1
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
        } else {
            return (
                <button className='done' onClick={this.taskDone}>Done!</button>
            );
        }
    }
}
