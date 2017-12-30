import React from 'react';

export default class ExerciseStartPage extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.instructions}</p>
                <button className='start' onClick={this.props.startExercise}>Start!</button>
            </div>
        );
    }
}
