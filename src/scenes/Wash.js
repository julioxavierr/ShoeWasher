import React from 'React';
import { SceneWrapper, SceneDescription, NavBar } from '@components/Scene';

const Wash = props => {
  const { id } = props;
  return (
    <SceneWrapper>
      <NavBar title="Lavagem" />
      <SceneDescription>#{id}</SceneDescription>
    </SceneWrapper>
  );
};

export default Wash;
