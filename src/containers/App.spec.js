import 'jsdom-global/register';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import ExercisePage from '../components/ExercisePage';
import LandingPage from '../components/LandingPage';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { configure, mount } from 'enzyme';

configure({adapter: new Adapter()});

describe('<App/>', () => {

    it('should show landing page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );
        expect(wrapper.find(LandingPage)).toHaveLength(1);
    });

    it('should show exercise page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/exercise']}>
                <App/>
            </MemoryRouter>
        );
        expect(wrapper.find(ExercisePage)).toHaveLength(1);
    });

});
