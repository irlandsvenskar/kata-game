import { START_EXERCISE, COMPLETE_TASK } from '../constants/actions';
import Exercise from '../model/Exercise';

const initialState = {
    exercise: new Exercise(null, [])
};

const buildState = (oldState, exerciseStartTime, tasks) => {
    return Object.assign({}, oldState, {
        exercise: new Exercise(exerciseStartTime, tasks)
    });
};

const reduce = (state=initialState, action) => {
    switch (action.type) {
        case START_EXERCISE:
            return buildState(state, action.time, state.exercise.tasks);
        case COMPLETE_TASK:
            const tasks = state.exercise.tasks;
            const newTasks = [
                ...tasks.slice(0, action.index),
                Object.assign({}, tasks[action.index], {endTime: action.time}),
                ...tasks.slice(action.index + 1)
            ];
            return buildState(state, state.exercise.startTime, newTasks);
        default:
            return state;
    }
};

export { reduce };
