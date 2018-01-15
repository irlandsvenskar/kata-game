import Exercise from '../model/Exercise';
import ExercisePage from '../components/ExercisePage';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Task from '../model/Task';

import exerciseJson from './exercise.json';

export const jsonToTask = json => {
    return new Task(json.title, <ReactMarkdown source={json.instructions}/>);
};

export const jsonToExercise = json => {
    return new Exercise(
        json.title,
        <ReactMarkdown source={json.instructions}/>,
        json.tasks && json.tasks.map(jsonToTask)
    );
};

export default class App extends React.Component {
    render() {
        return (
            <ExercisePage exercise={jsonToExercise(exerciseJson)}/>
        );
    }
}
