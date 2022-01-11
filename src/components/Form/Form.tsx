import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  MouseEvent,
  VoidFunctionComponent,
} from 'react';
import { ButtonHTML } from '../Displayer/DisplayerComponents';
import {
  FormDoubleInput,
  FormInputTemplate,
  FormWrapper,
  TitleSmall,
} from './FormComponents';
import * as FormFunc from './FormFunctions';

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

  const [formClasses, setFormClasses] = useState<{ [index: string]: boolean }>(
    FormFunc.createFormClassesObject(formData),
  );

  const handleChange: (input: string) => ChangeEventHandler<HTMLInputElement> =
    input => e => {
      formClasses[input] = false;
      setFormData({
        ...formData,
        [input]: e.target.value,
      });
    };

  const handleSubmit: (e: MouseEvent) => void = e => {
    e.preventDefault();
    const tempFormClasses = formClasses;

    if (!FormFunc.confirmEntriesNotEmpty(formData, ['childrenNumber']))
      FormFunc.markEmptyEntries(formData, tempFormClasses, ['childrenNumber']);

    if (!FormFunc.validateEmail(formData.mail))
      FormFunc.markBadEmail('mail', tempFormClasses);

    setFormClasses(tempFormClasses);
  };

  useEffect(() => {}, [formClasses]);

  return (
    <FormWrapper>
      <TitleSmall>Información Personal</TitleSmall>
      <FormDoubleInput>
        <FormInputTemplate
          id={'firstName'}
          placeholder={'Nombre'}
          type={'text'}
          onChange={handleChange('firstName')}
          isWrong={formClasses.firstName}
        />
        <FormInputTemplate
          id={'lastName'}
          placeholder={'Apellido'}
          type={'text'}
          onChange={handleChange('lastName')}
          isWrong={formClasses.lastName}
        />
      </FormDoubleInput>
      <FormDoubleInput>
        <FormInputTemplate
          id={'birthdate'}
          placeholder={'Fecha de nacimiento'}
          type={'date'}
          onChange={handleChange('birthdate')}
          isWrong={formClasses.birthdate}
        />
        <FormInputTemplate
          id={'phone'}
          placeholder={'Número de Teléfono'}
          type={'phone'}
          onChange={handleChange('phone')}
          isWrong={formClasses.phone}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'id'}
        placeholder={'Cedula de Identidad'}
        onChange={handleChange('id')}
        isWrong={formClasses.id}
        type={'text'}
      />
      <FormInputTemplate
        id={'mail'}
        placeholder={'Correo Electrónico'}
        type={'email'}
        onChange={handleChange('mail')}
        isWrong={formClasses.mail}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'civilianState'}
          placeholder={'Estado Civíl'}
          type={'text'}
          onChange={handleChange('civilianState')}
          isWrong={formClasses.civilianState}
        />
        <FormInputTemplate
          id={'childrenNumber'}
          placeholder={'Número de hijos'}
          type={'number'}
          onChange={handleChange('childrenNumber')}
          isWrong={formClasses.childrenNumber}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'address'}
        placeholder={'Dirección'}
        type={'text'}
        onChange={handleChange('address')}
        isWrong={formClasses.address}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'city'}
          placeholder={'Ciudad'}
          type={'text'}
          onChange={handleChange('city')}
          isWrong={formClasses.city}
        />
        <FormInputTemplate
          id={'state'}
          placeholder={'Estado'}
          type={'text'}
          onChange={handleChange('state')}
          isWrong={formClasses.state}
        />
      </FormDoubleInput>
      <TitleSmall>Información Bancaria</TitleSmall>
      <FormInputTemplate
        id={'bankAccountNumber'}
        placeholder={'Número de Cuenta'}
        type={'text'}
        onChange={handleChange('bankAccountNumber')}
        isWrong={formClasses.bankAccountNumber}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'bankAccountType'}
          placeholder={'Tipo de Cuenta'}
          type={'Text'}
          onChange={handleChange('bankAccountType')}
          isWrong={formClasses.bankAccountType}
        />
        <FormInputTemplate
          id={'bankAccountBank'}
          placeholder={'Banco'}
          type={'text'}
          onChange={handleChange('bankAccountBank')}
          isWrong={formClasses.bankAccountBank}
        />
      </FormDoubleInput>
      <TitleSmall>Información del patrocinante o asociado</TitleSmall>
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalFirstName'}
          placeholder={'Nombre del asociado'}
          type={'text'}
          onChange={handleChange('referalFirstName')}
          isWrong={formClasses.referalFirstName}
        />
        <FormInputTemplate
          id={'referalLastName'}
          placeholder={'Apellido del Asociado'}
          type={'text'}
          onChange={handleChange('referalLastName')}
          isWrong={formClasses.referalLastName}
        />
      </FormDoubleInput>
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalId'}
          placeholder={'Cedula de Identidad del Asociado'}
          type={'text'}
          onChange={handleChange('referalId')}
          isWrong={formClasses.referalId}
        />
        <FormInputTemplate
          id={'referalCode'}
          placeholder={'Código del Asociado'}
          type={'text'}
          onChange={handleChange('referalCode')}
          isWrong={formClasses.referalCode}
        />
      </FormDoubleInput>
      <FormInputTemplate
        id={'referalAddress'}
        placeholder={'Dirección del Asociado'}
        type={'text'}
        onChange={handleChange('referalAddress')}
        isWrong={formClasses.referalAddress}
      />
      <FormDoubleInput>
        <FormInputTemplate
          id={'referalCity'}
          placeholder={'Ciudad del Asociado'}
          type={'text'}
          onChange={handleChange('referalCity')}
          isWrong={formClasses.referalCity}
        />
        <FormInputTemplate
          id={'referalState'}
          placeholder={'Estado del Asociado'}
          type={'text'}
          onChange={handleChange('referalState')}
          isWrong={formClasses.referalState}
        />
      </FormDoubleInput>
      <ButtonHTML onClick={handleSubmit}>Enviar Solicitud</ButtonHTML>
    </FormWrapper>
  );
};

export default Form;
