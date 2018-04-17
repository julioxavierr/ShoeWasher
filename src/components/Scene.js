import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import chevronLeft from '@assets/images/chevronLeft.png';

export const SceneBackground = styled.View`
  flex: 1;
  width: 101%;
  background-color: white;
`;

export const SceneWrapper = props => {
  const { background, children } = props;

  return <SceneBackground source={background}>{children}</SceneBackground>;
};

export const NavBar = props => {
  const { title } = props;

  return (
    <NavWrapper>
      <Back />
      <Title>{title.toUpperCase()}</Title>
    </NavWrapper>
  );
};

const Back = () => (
  <TouchableOpacity
    onPress={() => {
      Actions.pop();
    }}
  >
    <BackImage />
  </TouchableOpacity>
);

const NavWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  padding-left: 32;
  padding-right: 52;
  height: 80;
  background-color: gray;
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

export const SceneDescription = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: blue;
  padding-left: 32;
  padding-right: 32;
  margin-top: 24;
`;
