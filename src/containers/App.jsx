import React from 'react';
import Exercise from '../model/Exercise';
import ExercisePage from '../components/ExercisePage';
import Task from '../model/Task';

// REFACTOR: Use non-hardcoded supplier for exercises
const exercise = new Exercise([
    new Task('::task title 1::', '::task instructions 1::'),
    new Task('::task title 2::', '::task instructions 2::')
]);

export default class App extends React.Component {
    render() {
        return (
            <ExercisePage exercise={exercise}/>
        );
    }
}
