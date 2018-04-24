import React, { Component } from 'React';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { SceneWrapper, SceneContent } from '@components/Scene';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import logo from '@assets/images/logo.png';
import background from '@assets/images/background.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  _onSubmit() {
    console.log('Log in user', this.state.username);
    Actions.list();
  }

  render() {
    return (
      <SceneWrapper background={background}>
        <Logo />
        <SceneContent>
          <Form>
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
          </Form>
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

const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 400;
  height: 200;
  margin-top: 100;
  margin-bottom: 10;
  align-self: center;
  resize-mode: contain;
`;

export default Home;
