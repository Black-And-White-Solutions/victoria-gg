import React, { VoidFunctionComponent } from 'react';
import { HeightContainer } from '../components/Container';
import Form from '../components/Form/Form';

const SingIn: VoidFunctionComponent = () => {
  return (
    <HeightContainer display={'flex'}>
      <Form />
    </HeightContainer>
  );
};

export default SingIn;
