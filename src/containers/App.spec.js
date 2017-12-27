import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import ExercisePage from '../components/ExercisePage';
import React from 'react';
import { configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});

describe('<App/>', () => {

    it('should show exercise page', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(ExercisePage)).toHaveLength(1);
    });

});
