import Exercise from '../model/Exercise';
import { expect } from 'chai';

const jsonToExercise = json => {
    return new Exercise(json.title, json.instructions, json.tasks);
};

describe('Convert JSON to Exercise', () => {

    it('should convert exercise without tasks', () => {
        const json = {
            title: '::title::',
            instructions: '::instructions::',
            tasks: []
        };

        const exercise = jsonToExercise(json);

        expect(exercise).to.deep.equal(new Exercise('::title::', '::instructions::', []));
    });

});
