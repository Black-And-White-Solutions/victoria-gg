import React, { VoidFunctionComponent } from 'react';
import {
  FormCard,
  FormInput,
  FormInputLine,
  FormInputWrapper,
} from './FormComponents';

const Form: VoidFunctionComponent = () => {
  return (
    <FormCard>
      <FormInputWrapper>
        <FormInput
          name={'name'}
          placeholder={'Nombre Completo'}
          type={'text'}
        />
        <FormInputLine />
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInput
          name={'birthdate'}
          placeholder={'Fecha de nacimiento'}
          type={'text'}
        />
        <FormInputLine />
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInput
          name={'phone'}
          placeholder={'Número de Teléfono'}
          type={'phone'}
        />
        <FormInputLine />
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInput
          name={'mail'}
          placeholder={'Correo Electrónico'}
          type={'email'}
        />
        <FormInputLine />
      </FormInputWrapper>
    </FormCard>
  );
};

export default Form;
