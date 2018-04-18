import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from '@scenes/Home';
import List from '@scenes/List';

export default () => (
  <Router>
    <Stack>
      <Scene key="home" component={Home} hideNavBar={true} />
      <Scene key="list" component={List} hideNavBar={true} />
      <Scene key="detail" component={List} hideNavBar={true} />
    </Stack>
  </Router>
);
