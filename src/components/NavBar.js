import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import chevronLeft from '@assets/images/chevronLeft.png';
import { BLUE_COLOR } from '@theme';

const NavBar = props => {
  const { title, onPressBack } = props;

  return (
    <NavWrapper>
      <Back onPress={onPressBack !== undefined ? onPressBack : undefined} />
      <Title>{title.toUpperCase()}</Title>
    </NavWrapper>
  );
};

const Back = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      onPress={() => (onPress === undefined ? Actions.pop() : onPress())}
    >
      <BackImage />
    </TouchableOpacity>
  );
};

const NavWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  padding-left: 32;
  padding-right: 52;
  height: 80;
  background-color: ${BLUE_COLOR};
`;

const BackImage = styled.Image.attrs({
  source: chevronLeft,
})`
  width: 16;
  height: 16;
  resize-mode: contain;
`;

const Title = styled.Text`
  flex-direction: row;
  flex: 1;
  text-align: center;
  font-size: 14;
  font-weight: bold;
  color: white;
`;

export default NavBar;
