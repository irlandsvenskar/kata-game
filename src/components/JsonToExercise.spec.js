import Exercise from '../model/Exercise';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Task from '../model/Task';
import { expect } from 'chai';

const jsonToTask = json => {
    return new Task(json.title, <ReactMarkdown source={json.instructions}/>);
};

const jsonToExercise = json => {
    return new Exercise(
        json.title,
        <ReactMarkdown source={json.instructions}/>,
        json.tasks && json.tasks.map(jsonToTask)
    );
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

    describe('with tasks', () => {
        it('should handle 1', () => {
            const json = {tasks: [{title: '::title::', instructions: '::instructions::'}]};

            const exercise = jsonToExercise(json);

            const expected = new Exercise(
                undefined,
                <ReactMarkdown source={undefined}/>,
                [new Task('::title::', <ReactMarkdown source='::instructions::'/>)]
            );
            expect(exercise).to.deep.equal(expected);
        });

        it('should handle a few', () => {
            const json = {
                title: '::irrelevant title::',
                instructions: '::irrelevant instructions::',
                tasks: [
                    {title: '::title 1::', instructions: '::instructions 1::'},
                    {title: '::title 2::', instructions: '::instructions 2::'},
                    {title: '::title 3::', instructions: '::instructions 3::'}
                ]
            };

            const exercise = jsonToExercise(json);

            const expected = new Exercise(
                '::irrelevant title::', <ReactMarkdown source={'::irrelevant instructions::'}/>, [
                    new Task('::title 1::', <ReactMarkdown source='::instructions 1::'/>),
                    new Task('::title 2::', <ReactMarkdown source='::instructions 2::'/>),
                    new Task('::title 3::', <ReactMarkdown source='::instructions 3::'/>)
                ]
            );
            expect(exercise).to.deep.equal(expected);
        });
    });

});

describe('Convert JSON to Task', () => {

    it('should convert task', () => {
        const task = jsonToTask({title: '::title::', instructions: '::instructions::'});

        const expected = new Task('::title::', <ReactMarkdown source='::instructions::'/>);
        expect(task).to.deep.equal(expected);
    });

    it('should handle missing title', () => {
        const task = jsonToTask({instructions: '::instructions::'});

        const expected = new Task(undefined, <ReactMarkdown source='::instructions::'/>);
        expect(task).to.deep.equal(expected);
    });

    it('should handle missing instructions', () => {
        const task = jsonToTask({title: '::title::'});

        const expected = new Task('::title::', <ReactMarkdown source={undefined}/>);
        expect(task).to.deep.equal(expected);
    });

});
