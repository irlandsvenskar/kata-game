import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import { startExercise } from '../constants/actions';

configure({adapter: new Adapter()});

describe('start button', () => {

    it('should emit the START_EXERCISE action', () => {
        class MockActionDispatcher {
            dispatch(action) {
                this.action = action;
            }
            getAction() {
                return this.action;
            }
        };
        const actionDispatcher = new MockActionDispatcher();
        const wrapper = shallow(
            <LandingPage actionDispatcher={actionDispatcher}/>
        );
        const startButton = wrapper.find('button');
        startButton.simulate('click');
        const action = actionDispatcher.getAction();
        const expectedAction = startExercise(123);

        expect(action).to.deep.equal(expectedAction);
    });

});
