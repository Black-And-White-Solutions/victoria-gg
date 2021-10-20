import React, { VoidFunctionComponent } from 'react';
import { FormCard, FormInput } from './FormComponents';

const Form: VoidFunctionComponent = () => {
  return (
    <FormCard>
      <FormInput name={'name'} placeholder={'Nombre Completo'} type={'text'} />
      <FormInput
        name={'birthdate'}
        placeholder={'Fecha de nacimiento'}
        type={'text'}
      />
      <FormInput
        name={'phone'}
        placeholder={'Número de Teléfono'}
        type={'phone'}
      />
      <FormInput
        name={'mail'}
        placeholder={'Correo Electrónico'}
        type={'email'}
      />
    </FormCard>
  );
};

export default Form;
