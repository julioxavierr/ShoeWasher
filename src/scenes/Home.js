import React, { Component } from 'React';
import {
  SceneWrapper,
  SceneDescription,
  SceneContent,
} from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import styled from 'styled-components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  _onSubmit() {
    console.log('Log user', this.state.username);
    Actions.list();
  }

  render() {
    return (
      <SceneWrapper>
        <SceneDescription>Shoe Washer</SceneDescription>
        <SceneContent>
          <LoginForm>
            <Item floatingLabel>
              <Label>Usuário</Label>
              <Input
                value={this.state.username}
                onChangeText={value =>
                  this.setState({ username: value.replace(/[^a-z0-9._]/g, '') })
                }
                autoCapitalize="none"
                maxLength={25}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Senha</Label>
              <Input
                secureTextEntry
                onChangeText={value => this.setState({ password: value })}
              />
            </Item>
          </LoginForm>
        </SceneContent>
        <Submit primary onPress={() => this._onSubmit()}>
          <Text>ENTRAR</Text>
        </Submit>
      </SceneWrapper>
    );
  }
}

const Submit = styled(Button)`
  margin-top: 40;
  align-self: center;
`;

const LoginForm = styled(Form)`
  margin-top: 60;
`;

export default Home;
