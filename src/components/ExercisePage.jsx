import React from 'react';

export default class ExercisePage extends React.Component {
    render() {
        const tasks = this.props.exercise.tasks;
        var taskTitle = null;
        var errorMessage = null;
        if (tasks && tasks.length > 0) {
            taskTitle = tasks[0].name;
        } else {
            errorMessage = 'This exercise has no tasks!';
        }
        return (
            <div>
                <h1>{taskTitle}</h1>
                <p>{errorMessage}</p>
            </div>
        )
    }
}
