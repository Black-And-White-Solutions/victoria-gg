import React, { VoidFunctionComponent } from 'react';
import {
  FormDoubleInput,
  FormInputTemplate,
  FormWrapper,
} from './FormComponents';

const Form: VoidFunctionComponent = () => {
  return (
    <FormWrapper>
      <FormDoubleInput>
        <FormInputTemplate
          id={'firstName'}
          placeholder={'Nombre'}
          type={'text'}
        />
        <FormInputTemplate
          id={'lastName'}
          placeholder={'Apellido'}
          type={'text'}
        />
      </FormDoubleInput>
      <FormDoubleInput>
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
      </FormDoubleInput>
      <FormInputTemplate
        id={'id'}
        placeholder={'Cedula de Identidad'}
        type={'text'}
      />
      <FormInputTemplate
        id={'mail'}
        placeholder={'Correo Electrónico'}
        type={'email'}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'civilianState'}
          placeholder={'Estado Civíl'}
          type={'text'}
        />
        <FormInputTemplate
          id={'childrenNumber'}
          placeholder={'Número de hijos'}
          type={'text'}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'address'}
        placeholder={'Dirección'}
        type={'text'}
      />
    </FormWrapper>
  );
};

export default Form;
