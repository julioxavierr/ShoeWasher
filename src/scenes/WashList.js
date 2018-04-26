import React from 'React';
import { Alert } from 'react-native';
import { List, ListItem, Text, Content } from 'native-base';
import { SceneWrapper, NavBar } from '@components/Scene';
import ItemHeader from '@components/ItemHeader';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import exit from '@assets/images/exit.png';

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
      <NavBar
        title="Lista de lavagens"
        onPressBack={() => _alert()}
        icon={exit}
      />
      <Content>
        <List>
          <ItemHeader>EM ANDAMENTO</ItemHeader>
          <ListItem onPress={() => Actions.wash()}>
            <Text>Lavagem #2</Text>
          </ListItem>
          <ItemHeader>FINALIZADAS</ItemHeader>
          <ListItem onPress={() => Actions.wash()}>
            <Text>Lavagem #1</Text>
          </ListItem>
        </List>
      </Content>
    </SceneWrapper>
  );
};

export default WashList;
