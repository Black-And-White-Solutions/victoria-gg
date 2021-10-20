import React, { VoidFunctionComponent, ChangeEventHandler } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { size } from '../../assets/mediaSizes';

// const { desktopS, tablet, mobileL } = size;

type FormInputProps = {
  id: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  type: string;
  value?: string;
};

// Styled Components

export const FormCard = styled.div`
  display: flex;
  width: 50%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background: #ffffff;
  border-radius: 75px 0;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.25);
`;

export const FormInput = styled.input`
  width: 80%;
  height: 2.2rem;
  padding: 0 1rem;
  border: none;
  margin: 0.5rem 0 1.5rem 0;
  background: #fff0f0;
  border-radius: 15px;
  color: #575155;
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const FormLabel = styled.label`
  color: #575155;
`;

// Function Components

export const FormInputTemplate: VoidFunctionComponent<FormInputProps> =
  props => {
    return (
      <>
        <FormLabel htmlFor={props.id}>{props.placeholder}</FormLabel>
        <FormInput
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type}
          value={props.value}
        />
      </>
    );
  };

FormInputTemplate.defaultProps = {
  name: '',
  placeholder: '',
  type: 'text',
  value: '',
};

FormInputTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

/*
export const FormInputLine = styled.div`
  position: relative;
  top: -30%;
  width: 55%;
  height: 0;
  border: 1px solid #f11593;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
 */
