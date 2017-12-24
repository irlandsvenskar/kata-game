import React from 'react';
import { startExercise } from '../constants/actions';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        if (props.actionDispatcher) {
            this.actionDispatcher = props.actionDispatcher;
        } else {
            this.actionDispatcher = null;
        }
    }
    render() {
        return (
            <div>
                <h1>So Simple!</h1>
                <h2>Instructions</h2>
                <p>The setup instructions go here...</p>
                <button onClick={
                    () => this.actionDispatcher.dispatch(startExercise(123))
                }>Start!</button>
            </div>
        )
    }
}
