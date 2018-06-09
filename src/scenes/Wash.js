import React, { Component } from 'React';
import styled from 'styled-components';
import { SceneWrapper, NavBar } from '@components/Scene';
import { request } from '@helpers';

class Wash extends Component {
  constructor(props) {
    super(props);
    this.state = { info: undefined };
  }

  componentWillMount() {
    this._getDetail();
  }

  _getDetail() {
    request(
      `http://localhost:8000/api/service_order/service_order/${this.props.id}/`,
    )
      .then(response => this.setState({ info: response }))
      .catch(() => {
        throw new Error('Error getting services');
      });
  }

  render() {
    const { info } = this.state;

    if (!info) {
      return (
        <SceneWrapper>
          <Spinner />
        </SceneWrapper>
      );
    }

    return (
      <SceneWrapper>
        <NavBar title="Lavagem" onPressRefresh={() => this._getDetail()} />
        <Info first>Lavagem: #{info.id}</Info>
        <Info>Máquina: {info.shoe_washer}</Info>
        <Info>Tipo de lavagem: {info.wash_type}</Info>
        <Info>Fase da lavagem: {info.state}</Info>
        <Info>Paga: {info.is_paid ? 'Sim' : 'Não'}</Info>
        <Info>Valor: R$ {info.payment_value.replace('.', ',')} </Info>
      </SceneWrapper>
    );
  }
}

const Info = styled.Text`
  text-align: center;
  font-size: 25;
  color: black;
  font-weight: bold;
  margin-top: ${props => (props.first ? 30 : 12)};
`;

const Spinner = styled.Image.attrs({
  source: require('@assets/images/spinner.gif'),
})`
  width: 44;
  height: 42;
  resize-mode: contain;
  align-self: center;
  margin-top: 300;
`;

export default Wash;
