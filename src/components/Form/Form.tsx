import React, { VoidFunctionComponent } from 'react';
import { FormCard, FormInputTemplate } from './FormComponents';

const Form: VoidFunctionComponent = () => {
  return (
    <FormCard>
      <FormInputTemplate
        id={'name'}
        placeholder={'Nombre Completo'}
        type={'text'}
      />
      <FormInputTemplate
        id={'birthdate'}
        placeholder={'Fecha de nacimiento'}
        type={'date'}
      />
      <FormInputTemplate
        id={'phone'}
        placeholder={'Número de Teléfono'}
        type={'phone'}
      />
      <FormInputTemplate
        id={'mail'}
        placeholder={'Correo Electrónico'}
        type={'email'}
      />
    </FormCard>
  );
};

export default Form;
