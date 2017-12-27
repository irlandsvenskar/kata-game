import React from 'react';

export default class ExercisePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTask: null};
    }
    start = () => {
        this.setState({currentTask: 0});
    }
    render() {
        return (
            <button onClick={this.start}>Start!</button>
        );
    }
}
