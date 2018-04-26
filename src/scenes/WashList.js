import React from 'React';
import { Alert } from 'react-native';
import { List, Content } from 'native-base';
import { SceneWrapper, NavBar } from '@components/Scene';
import ItemHeader from '@components/ItemHeader';
import WashItem from '@components/WashItem';
import { Actions } from 'react-native-router-flux';
import exit from '@assets/images/exit.png';

const mockedInProgress = [{ id: 2 }, { id: 3 }];

const mockedFinished = [{ id: 1 }];

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
          {mockedInProgress.map(item => (
            <WashItem key={item.id} id={item.id}>
              Lavagem #{item.id}
            </WashItem>
          ))}
          <ItemHeader>FINALIZADAS</ItemHeader>
          {mockedFinished.map(item => (
            <WashItem key={item.id} id={item.id}>
              Lavagem #{item.id}
            </WashItem>
          ))}
        </List>
      </Content>
    </SceneWrapper>
  );
};

export default WashList;
