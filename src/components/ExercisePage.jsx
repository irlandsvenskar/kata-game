import React from 'react';

export default class ExercisePage extends React.Component {
    render() {
        const tasks = this.props.exercise.tasks;
        var taskTitle = null;
        var errorMessage = null;
        if (!tasks || tasks.length == 0) {
            errorMessage = 'This exercise has no tasks!';
        } else {
            taskTitle = tasks[0].name;
        }
        return (
            <div>
                <h1>{taskTitle}</h1>
                <p>{errorMessage}</p>
                <button>Done!</button>
            </div>
        )
    }
}
