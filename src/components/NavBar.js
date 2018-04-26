import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import chevronLeft from '@assets/images/chevronLeft.png';
import { BLUE_COLOR } from '@theme';

const NavBar = props => {
  const { title, onPressBack, icon } = props;

  return (
    <NavWrapper>
      <Back
        onPress={onPressBack !== undefined ? onPressBack : undefined}
        icon={icon}
      />
      <Title>{title.toUpperCase()}</Title>
    </NavWrapper>
  );
};

const Back = props => {
  const { onPress, icon } = props;

  return (
    <BackTouchable
      onPress={() => (onPress === undefined ? Actions.pop() : onPress())}
    >
      <BackImage source={icon !== undefined ? icon : chevronLeft} />
    </BackTouchable>
  );
};

const NavWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  height: 80;
  background-color: ${BLUE_COLOR};
`;

const BackTouchable = styled.TouchableOpacity`
  padding-horizontal: 20;
  padding-vertical: 10;
`;

const BackImage = styled.Image`
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
