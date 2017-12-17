import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App.jsx';

const renderApp = (app) => () => {
    const AppElement = app;
    render(
        <AppContainer>
            <AppElement/>
        </AppContainer>,
        document.getElementById("app")
    );
};

if (module && module.hot) {
    module.hot.accept('./containers/App.jsx',
        renderApp(require('./containers/App.jsx')));
}

renderApp(App)();
