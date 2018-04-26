import React from 'React';
import { ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Item = props => {
  const { children } = props;

  return (
    <ListItem onPress={() => Actions.wash()}>
      <Text>{children}</Text>
    </ListItem>
  );
};

export default Item;
