import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from '@scenes/Home';
import WashList from '@scenes/WashList';
import Wash from '@scenes/Wash';
import { Provider } from 'react-redux';
import configureStore from '@store/create';

export const store = configureStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Stack>
        <Scene key="home" component={Home} hideNavBar={true} />
        <Scene key="washlist" component={WashList} hideNavBar={true} />
        <Scene key="wash" component={Wash} hideNavBar={true} />
      </Stack>
    </Router>
  </Provider>
);
