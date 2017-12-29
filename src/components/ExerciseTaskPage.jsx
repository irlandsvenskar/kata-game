import React from 'react';

export default class ExerciseTaskPage extends React.Component {
    constructor(props) {
        super(props);
        this.exerciseTitle = props.exerciseTitle;
        this.taskTitle = props.taskTitle;
        this.instructions = props.instructions;
        this.taskDone = props.taskDone;
    }
    render() {
        return (
            <div>
                <h2>{this.exerciseTitle}</h2>
                <h3>{this.taskTitle}</h3>
                <p>{this.instructions}</p>
                <button className='done' onClick={this.taskDone}>Done!</button>
            </div>
        );
    }
}
