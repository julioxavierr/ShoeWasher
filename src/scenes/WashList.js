import React from 'React';
import { Alert } from 'react-native';
import { List, ListItem, Text, Content } from 'native-base';
import { SceneWrapper, NavBar } from '@components/Scene';
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
      <NavBar title="Lista de lavagens" onPressBack={() => _alert()} />
      <Content>
        <List>
          <ListItem onPress={() => Actions.wash()}>
            <Text>Lavagem</Text>
          </ListItem>
        </List>
      </Content>
    </SceneWrapper>
  );
};

export default WashList;
