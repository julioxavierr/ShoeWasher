import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR, BLUE_COLOR } from '@theme';

export const SceneWrapper = props => {
  const { background, children } = props;

  return <SceneBackground source={background}>{children}</SceneBackground>;
};

export const SceneBackground = styled.View`
  flex: 1;
  width: 101%;
  background-color: ${GRAY_COLOR};
`;

export const SceneDescription = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: center;
  color: ${BLUE_COLOR};
  margin-top: 24;
`;

export const SceneContent = styled.View`
  padding-horizontal: 32;
`;

export NavBar from '@components/NavBar';
