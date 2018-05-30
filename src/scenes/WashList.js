import React, { Component } from 'React';
import { Alert } from 'react-native';
import { List, Content } from 'native-base';
import { SceneWrapper, NavBar } from '@components/Scene';
import ItemHeader from '@components/ItemHeader';
import WashItem from '@components/WashItem';
import { connect } from 'react-redux';
import { logout } from '@redux/authentication/actions';
import { Actions } from 'react-native-router-flux';
import exit from '@assets/images/exit.png';
import { request } from '@helpers';

const mockedFinished = [{ id: 1 }];

class WashList extends Component {
  constructor(props) {
    super(props);
    this.state = { services: [] };
  }

  componentWillMount() {
    this._getServices();
  }

  _getServices() {
    request('http://localhost:8000/api/service_order/service_order/')
      .then(response => this.setState({ services: response }))
      .catch(() => {
        throw new Error('Error getting services');
      });
  }

  _logout() {
    this.props.dispatch(logout());
    Actions.pop();
  }

  _alert() {
    Alert.alert(
      'SAIR',
      'Tem certeza que quer deslogar?',
      [{ text: 'Sim', onPress: () => this._logout() }, { text: 'Cancelar' }],
      { cancelable: false },
    );
  }

  render() {
    return (
      <SceneWrapper>
        <NavBar
          title="Lista de serviços"
          onPressBack={() => this._alert()}
          icon={exit}
        />
        <Content>
          <List>
            <ItemHeader>EM ANDAMENTO</ItemHeader>
            {this.state.services.map(item => (
              <WashItem key={item.id} id={item.id}>
                Lavagem #{item.id}
              </WashItem>
            ))}
            {/* <ItemHeader>FINALIZADAS</ItemHeader>
            {mockedFinished.map(item => (
              <WashItem key={item.id} id={item.id}>
                Lavagem #{item.id}
              </WashItem>
            ))} */}
          </List>
        </Content>
      </SceneWrapper>
    );
  }
}

export default connect()(WashList);
