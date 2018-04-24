import React, { Component } from 'React';
import { Button } from 'react-native';
import {
  SceneWrapper,
  SceneDescription,
  SceneContent,
} from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { Form, Item, Input, Label } from 'native-base';

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
        <Button
          onPress={() => this._onSubmit()}
          title="Log in"
          color="#841584"
        />
      </SceneWrapper>
    );
  }
}

export default Home;
