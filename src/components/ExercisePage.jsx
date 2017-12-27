import React from 'react';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
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
        return (
            <div>
                <button className='start' onClick={this.startExercise}>Start!</button>
                <button className='done' onClick={this.taskDone}>Done!</button>
            </div>
        );
    }
}
