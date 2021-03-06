import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import chevronLeft from '@assets/images/chevronLeft.png';
import { BLUE_COLOR } from '@theme';

const NavBar = props => {
  const { title, onPressBack, onPressRefresh, backImage } = props;

  return (
    <NavWrapper>
      <Back onPress={onPressBack} icon={backImage} />
      <Title>{title.toUpperCase()}</Title>
      <Refresh onPress={onPressRefresh} />
    </NavWrapper>
  );
};

const Back = props => {
  const { onPress, icon } = props;

  return (
    <IconTouchable
      onPress={() => (onPress === undefined ? Actions.pop() : onPress())}
    >
      <BackImage source={icon !== undefined ? icon : chevronLeft} />
    </IconTouchable>
  );
};

const Refresh = ({ onPress }) => (
  <IconTouchable onPress={onPress}>
    <RefreshImage />
  </IconTouchable>
);

const NavWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  padding-horizontal: 24;
  height: 80;
  background-color: ${BLUE_COLOR};
`;

const IconTouchable = styled.TouchableOpacity`
  padding-vertical: 10;
`;

const BackImage = styled.Image`
  width: 16;
  height: 16;
  resize-mode: contain;
`;

const RefreshImage = styled.Image.attrs({
  source: require('@assets/images/refresh.png'),
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
