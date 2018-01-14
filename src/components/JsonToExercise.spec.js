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

    it('should handle missing title', () => {
        const exercise = jsonToExercise({instructions: '::instructions::', tasks: []});

        expect(exercise).to.deep.equal(new Exercise(undefined, '::instructions::', []));
    });

    it('should handle missing instructions', () => {
        const exercise = jsonToExercise({title: '::title::', tasks: []});

        expect(exercise).to.deep.equal(new Exercise('::title::', undefined, []));
    });

    it('should handle missing tasks', () => {
        const exercise = jsonToExercise({title: '::title::', instructions: '::instructions::'});

        expect(exercise).to.deep.equal(new Exercise('::title::', '::instructions::', undefined));
    });

});
