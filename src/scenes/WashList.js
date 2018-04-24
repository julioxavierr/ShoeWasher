import React from 'React';
import { Button, Alert } from 'react-native';
import { SceneWrapper, SceneDescription, NavBar } from '@components/Scene';
import { Actions } from 'react-native-router-flux';

const WashList = () => {
  const _alert = () => {
    Alert.alert(
      'SAIR',
      'Tem certeza que quer deslogar?',
      [{ text: 'Sim', onPress: () => Actions.pop() }, { text: 'Cancelar' }],
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

export default WashList;
