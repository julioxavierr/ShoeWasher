import React from 'React';
import { ListItem, Text } from 'native-base';
import styled from 'styled-components';

const ItemHeader = props => {
  const { children } = props;

  return (
    <Wrapper>
      <HeaderText>{children}</HeaderText>
    </Wrapper>
  );
};

const HeaderText = styled(Text)`
  font-weight: bold;
`;

const Wrapper = styled(ListItem).attrs({
  itemHeader: true,
  first: true,
})`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default ItemHeader;
