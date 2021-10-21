import React, { VoidFunctionComponent } from 'react';
import {
  FormDoubleInput,
  FormInputTemplate,
  FormWrapper,
  TitleSmall,
} from './FormComponents';

const Form: VoidFunctionComponent = () => {
  return (
    <FormWrapper>
      <TitleSmall>Información Personal</TitleSmall>
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
      <FormDoubleInput>
        <FormInputTemplate id={'city'} placeholder={'Ciudad'} type={'text'} />
        <FormInputTemplate id={'state'} placeholder={'Estado'} type={'text'} />
      </FormDoubleInput>
      <TitleSmall>Información Bancaria</TitleSmall>
      <FormInputTemplate
        id={'bankAccountNumber'}
        placeholder={'Número de Cuenta'}
        type={'number'}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'bankAccountType'}
          placeholder={'Tipo de Cuenta'}
          type={'Text'}
        />
        <FormInputTemplate
          id={'bankAccountBank'}
          placeholder={'Banco'}
          type={'text'}
        />
      </FormDoubleInput>
      <TitleSmall>Información del patrocinante o asociado</TitleSmall>
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalFirstName'}
          placeholder={'Nombre del asociado'}
          type={'text'}
        />
        <FormInputTemplate
          id={'referalLastName'}
          placeholder={'Apellido del Asociado'}
          type={'text'}
        />
      </FormDoubleInput>
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalId'}
          placeholder={'Cedula de Identidad del Asociado'}
          type={'text'}
        />
        <FormInputTemplate
          id={'referalCode'}
          placeholder={'Código del Asociado'}
          type={'text'}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'referalAddress'}
        placeholder={'Dirección del Asociado'}
        type={'text'}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalCity'}
          placeholder={'Ciudad del Asociado'}
          type={'text'}
        />
        <FormInputTemplate
          id={'referalState'}
          placeholder={'Estado del Asociado'}
          type={'text'}
        />
      </FormDoubleInput>
    </FormWrapper>
  );
};

export default Form;
