export const COMPLETE_TASK = 'COMPLETE_TASK';
export const START_EXERCISE = 'START_EXERCISE';

export const startExercise = time => {
    return {type: START_EXERCISE, time};
};

export const completeTask = (index, time) => {
    return {type: COMPLETE_TASK, index, time};
};
