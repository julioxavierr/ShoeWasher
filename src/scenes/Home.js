import React, { Component } from 'React';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { InputScene, SceneContent } from '@components/Scene';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '@redux/authentication/actions';
import logo from '@assets/images/logo.png';
import background from '@assets/images/background.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  _onSubmit() {
    this.props.dispatch(login(this.state.username));
    Actions.washlist();
  }

  render() {
    return (
      <InputScene background={background}>
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
      </InputScene>
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
  margin-top: 120;
  margin-bottom: 20;
  align-self: center;
  resize-mode: contain;
`;

export default connect()(Home);
