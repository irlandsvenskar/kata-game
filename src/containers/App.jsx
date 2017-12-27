import React from 'react';
import Exercise from '../model/Exercise';
import ExercisePage from '../components/ExercisePage';

// REFACTOR: Use non-hardcoded supplier for exercises
const exercise = new Exercise(['::task 1::', '::task 2::']);

export default class App extends React.Component {
    render() {
        return (
            <ExercisePage exercise={exercise}/>
        );
    }
}
