import React from 'React';
import { SceneWrapper, SceneDescription, NavBar } from '@components/Scene';

const Wash = () => {
  return (
    <SceneWrapper>
      <NavBar title="Wash detail" />
      <SceneDescription>Wash #NUMBER</SceneDescription>
    </SceneWrapper>
  );
};

export default Wash;
