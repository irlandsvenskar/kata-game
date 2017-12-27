import React from 'react';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTask: null};
    }
    start = () => {
        this.setState((prevState, props) => {
            if (prevState.currentTask === null) {
                return {currentTask: 0};
            } else {
                return {currentTask: prevState.currentTask + 1}
            }
        });
    }
    render() {
        return (
            <div>
                <button className='start' onClick={this.start}>Start!</button>
                <button className='done' onClick={this.start}>Done!</button>
            </div>
        );
    }
}
