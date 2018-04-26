import React from 'React';
import { ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const WashItem = props => {
  const { children, id } = props;

  return (
    <ListItem onPress={() => Actions.wash({ id: id })}>
      <Text>{children}</Text>
    </ListItem>
  );
};

export default WashItem;
