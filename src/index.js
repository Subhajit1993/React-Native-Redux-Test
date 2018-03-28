
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import AppNavigator from './navigation/mainNavigator';

class Root extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }
    render() {
        return (
            <Provider store={store}>
                    <AppNavigator/>
                </Provider>
        );
    }
}

export default Root;
