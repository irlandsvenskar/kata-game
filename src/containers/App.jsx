import React from 'react';
import Exercise from '../model/Exercise';
import ExercisePage from '../components/ExercisePage';
import LandingPage from '../components/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const exercise = props =>
    <ExercisePage exercise={new Exercise(0, [])} {...props}/>;

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/exercise" component={exercise}/>
                </div>
            </Router>
        )
    }
}
