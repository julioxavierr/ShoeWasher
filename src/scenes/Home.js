import React from 'React';
import { Button } from 'react-native';
import { SceneWrapper, SceneDescription } from '@components/Scene';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  return (
    <SceneWrapper>
      <SceneDescription>Shoe Washer</SceneDescription>
      <Button onPress={() => Actions.list()} title="Log in" color="#841584" />
    </SceneWrapper>
  );
};

export default Home;
