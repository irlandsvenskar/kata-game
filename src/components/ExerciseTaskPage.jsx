import React from 'react';

export default class ExerciseTaskPage extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.exerciseTitle}</h2>
                <h3>{this.props.taskTitle}</h3>
                <p>{this.props.instructions}</p>
                <button className='done' onClick={this.props.taskDone}>Done!</button>
            </div>
        );
    }
}
