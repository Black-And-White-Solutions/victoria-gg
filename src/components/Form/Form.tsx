import React, {
  useState,
  ChangeEventHandler,
  VoidFunctionComponent,
} from 'react';
import { ButtonHTML } from '../Displayer/DisplayerComponents';
import {
  FormDoubleInput,
  FormInputTemplate,
  FormWrapper,
  TitleSmall,
} from './FormComponents';

type FormDataProps = {
  firstName: string;
  lastName: string;
  birthdate: string;
  phone: string;
  id: string;
  mail: string;
  civilianState: string;
  childrenNumber: number;
  address: string;
  city: string;
  state: string;
  bankAccountNumber: number;
  bankAccountType: string;
  bankAccountBank: string;
  referalFirstName: string;
  referalLastName: string;
  referalId: string;
  referalCode: string;
  referalAddress: string;
  referalCity: string;
  referalState: string;
};

const Form: VoidFunctionComponent = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: '',
    lastName: '',
    birthdate: '',
    phone: '',
    id: '',
    mail: '',
    civilianState: '',
    childrenNumber: 0,
    address: '',
    city: '',
    state: '',
    bankAccountNumber: 0,
    bankAccountType: '',
    bankAccountBank: '',
    referalFirstName: '',
    referalLastName: '',
    referalId: '',
    referalCode: '',
    referalAddress: '',
    referalCity: '',
    referalState: '',
  });

  const handleChange: (input: string) => ChangeEventHandler<HTMLInputElement> =
    input => e => {
      setFormData({
        ...formData,
        [input]: e.target.value,
      });
    };

  return (
    <FormWrapper>
      <TitleSmall>Información Personal</TitleSmall>
      <FormDoubleInput>
        <FormInputTemplate
          id={'firstName'}
          placeholder={'Nombre'}
          type={'text'}
          onChange={handleChange('firstName')}
        />
        <FormInputTemplate
          id={'lastName'}
          placeholder={'Apellido'}
          type={'text'}
          onChange={handleChange('lastName')}
        />
      </FormDoubleInput>
      <FormDoubleInput>
        <FormInputTemplate
          id={'birthdate'}
          placeholder={'Fecha de nacimiento'}
          type={'date'}
          onChange={handleChange('birthdate')}
        />
        <FormInputTemplate
          id={'phone'}
          placeholder={'Número de Teléfono'}
          type={'phone'}
          onChange={handleChange('phone')}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'id'}
        placeholder={'Cedula de Identidad'}
        onChange={handleChange('id')}
        type={'text'}
      />
      <FormInputTemplate
        id={'mail'}
        placeholder={'Correo Electrónico'}
        type={'email'}
        onChange={handleChange('mail')}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'civilianState'}
          placeholder={'Estado Civíl'}
          type={'text'}
          onChange={handleChange('civilianState')}
        />
        <FormInputTemplate
          id={'childrenNumber'}
          placeholder={'Número de hijos'}
          type={'number'}
          onChange={handleChange('childrenNumber')}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'address'}
        placeholder={'Dirección'}
        type={'text'}
        onChange={handleChange('address')}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'city'}
          placeholder={'Ciudad'}
          type={'text'}
          onChange={handleChange('city')}
        />
        <FormInputTemplate
          id={'state'}
          placeholder={'Estado'}
          type={'text'}
          onChange={handleChange('state')}
        />
      </FormDoubleInput>
      <TitleSmall>Información Bancaria</TitleSmall>
      <FormInputTemplate
        id={'bankAccountNumber'}
        placeholder={'Número de Cuenta'}
        type={'text'}
        onChange={handleChange('bankAccountNumber')}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'bankAccountType'}
          placeholder={'Tipo de Cuenta'}
          type={'Text'}
          onChange={handleChange('bankAccountType')}
        />
        <FormInputTemplate
          id={'bankAccountBank'}
          placeholder={'Banco'}
          type={'text'}
          onChange={handleChange('bankAccountBank')}
        />
      </FormDoubleInput>
      <TitleSmall>Información del patrocinante o asociado</TitleSmall>
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalFirstName'}
          placeholder={'Nombre del asociado'}
          type={'text'}
          onChange={handleChange('referalFirstName')}
        />
        <FormInputTemplate
          id={'referalLastName'}
          placeholder={'Apellido del Asociado'}
          type={'text'}
          onChange={handleChange('referalLastName')}
        />
      </FormDoubleInput>
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalId'}
          placeholder={'Cedula de Identidad del Asociado'}
          type={'text'}
          onChange={handleChange('referalId')}
        />
        <FormInputTemplate
          id={'referalCode'}
          placeholder={'Código del Asociado'}
          type={'text'}
          onChange={handleChange('referalCode')}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'referalAddress'}
        placeholder={'Dirección del Asociado'}
        type={'text'}
        onChange={handleChange('referalAddress')}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalCity'}
          placeholder={'Ciudad del Asociado'}
          type={'text'}
          onChange={handleChange('referalCity')}
        />
        <FormInputTemplate
          id={'referalState'}
          placeholder={'Estado del Asociado'}
          type={'text'}
          onChange={handleChange('referalState')}
        />
      </FormDoubleInput>
      <ButtonHTML>Enviar Solicitud</ButtonHTML>
    </FormWrapper>
  );
};

export default Form;
