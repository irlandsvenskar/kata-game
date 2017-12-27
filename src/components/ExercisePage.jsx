import React from 'react';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTask: null};
    }
    start = () => {
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
                <button className='start' onClick={this.start}>Start!</button>
                <button className='done' onClick={this.taskDone}>Done!</button>
            </div>
        );
    }
}
