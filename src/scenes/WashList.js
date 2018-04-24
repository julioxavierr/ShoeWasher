import React from 'React';
import { Alert } from 'react-native';
import { List, ListItem, Text, Content } from 'native-base';
import { SceneWrapper, NavBar } from '@components/Scene';
import styled from 'styled-components';
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
          <ItemHeader>
            <Text>EM ANDAMENTO</Text>
          </ItemHeader>
          <ListItem onPress={() => Actions.wash()}>
            <Text>Lavagem #2</Text>
          </ListItem>
          <ItemHeader>
            <Text>FINALIZADAS</Text>
          </ItemHeader>
          <ListItem onPress={() => Actions.wash()}>
            <Text>Lavagem #1</Text>
          </ListItem>
        </List>
      </Content>
    </SceneWrapper>
  );
};

const ItemHeader = styled(ListItem).attrs({
  itemHeader: true,
  first: true,
})`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default WashList;
