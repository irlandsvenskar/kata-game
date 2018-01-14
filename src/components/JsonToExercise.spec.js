import Exercise from '../model/Exercise';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Task from '../model/Task';
import { expect } from 'chai';

const jsonToExercise = json => {
    return new Exercise(
        json.title,
        <ReactMarkdown source={json.instructions}/>,
        json.tasks
    );
};

const jsonToTask = json => {
    return new Task(json.title, <ReactMarkdown source={json.instructions}/>);
};

describe('Convert JSON to Exercise', () => {

    it('should convert exercise without tasks', () => {
        const json = {
            title: '::title::',
            instructions: '::instructions::',
            tasks: []
        };

        const exercise = jsonToExercise(json);

        const expected = new Exercise(
            '::title::',
            <ReactMarkdown source='::instructions::'/>,
            []
        );
        expect(exercise).to.deep.equal(expected);
    });

    it('should handle missing title', () => {
        const exercise = jsonToExercise({instructions: '::instructions::', tasks: []});

        const expected = new Exercise(
            undefined,
            <ReactMarkdown source='::instructions::'/>,
            []
        );
        expect(exercise).to.deep.equal(expected);
    });

    it('should handle missing instructions', () => {
        const exercise = jsonToExercise({title: '::title::', tasks: []});

        const expected = new Exercise(
            '::title::',
            <ReactMarkdown source={undefined}/>,
            []
        );
        expect(exercise).to.deep.equal(expected);
    });

    it('should handle missing tasks', () => {
        const exercise = jsonToExercise({title: '::title::', instructions: '::instructions::'});

        const expected = new Exercise(
            '::title::',
            <ReactMarkdown source='::instructions::'/>,
            undefined
        );
        expect(exercise).to.deep.equal(expected);
    });

});

describe('Convert JSON to Task', () => {

    it('should convert task', () => {
        const task = jsonToTask({title: '::title::', instructions: '::instructions::'});

        const expected = new Task('::title::', <ReactMarkdown source='::instructions::'/>);
        expect(task).to.deep.equal(expected);
    });

});
