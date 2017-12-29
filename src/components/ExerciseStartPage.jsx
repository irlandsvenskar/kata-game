import React from 'react';

export default class ExerciseStartPage extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.instructions = props.instructions;
        this.startExercise = props.startExercise;
    }
    render() {
        return (
            <div>
                <h2>{this.title}</h2>
                <p>{this.instructions}</p>
                <button className='start' onClick={this.startExercise}>Start!</button>
            </div>
        );
    }
}
