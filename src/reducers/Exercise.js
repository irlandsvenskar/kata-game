import { START_EXERCISE, COMPLETE_TASK } from '../constants/actions';
import Exercise from '../model/Exercise';

const initialState = {
    exerciseStartTime: null,
    taskFinishTimes: []
};

const buildState = (oldState, exerciseStartTime, taskFinishTimes) => {
    return Object.assign({}, oldState, {exerciseStartTime, taskFinishTimes});
};

const reduce = (state=initialState, action) => {
    switch (action.type) {
        case START_EXERCISE:
            return buildState(state, action.time, state.taskFinishTimes);
        case COMPLETE_TASK:
            const taskFinishTimes = state.taskFinishTimes.concat([action.time]);
            return buildState(state, state.exerciseStartTime, taskFinishTimes);
        default:
            return state;
    }
};

export { reduce };
