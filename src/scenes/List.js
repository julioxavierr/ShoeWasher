import React from 'React';
import { Button, Alert } from 'react-native';
import { SceneWrapper, SceneDescription, NavBar } from '@components/Scene';
import { Actions } from 'react-native-router-flux';

const List = () => {
  const _alert = () => {
    Alert.alert(
      'Log out',
      'Are you sure you want to log out?',
      [{ text: 'Yes', onPress: () => Actions.pop() }, { text: 'Cancel' }],
      { cancelable: false },
    );
  };

  return (
    <SceneWrapper>
      <NavBar title="Wash list" onPressBack={() => _alert()} />
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
