import React from 'React';
import { Button } from 'react-native';
import { SceneWrapper, SceneDescription, NavBar } from '@components/Scene';
import { Actions } from 'react-native-router-flux';

const List = () => {
  return (
    <SceneWrapper>
      <NavBar title="Wash list" />
      <SceneDescription>FlatList</SceneDescription>
      <Button
        onPress={() => Actions.wash()}
        title="Present detail"
        color="#841584"
      />
    </SceneWrapper>
  );
};

export default List;
