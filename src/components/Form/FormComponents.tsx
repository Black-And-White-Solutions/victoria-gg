import React, { VoidFunctionComponent, ChangeEventHandler } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { size } from '../../assets/mediaSizes';

// const { desktopS, tablet, mobileL } = size;

// Styled Components

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 512px;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 75px 0;
`;

export const FormDoubleInput = styled.div`
  display: grid;
  width: 88%;
  height: fit-content;
  gap: 1.5rem;
  grid-template-columns: repeat(2, [col-start] 1fr);
`;

export const FormInput = styled.input`
  width: 80%;
  height: 2.2rem;
  padding: 0 1rem;
  border: none;
  margin: 0.5rem 0 1.5rem 0;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  color: #575155;
  font-size: 1em;
  font-weight: 500;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormLabel = styled.label`
  color: #575155;
`;

export const TitleSmall = styled.h2`
  align-self: flex-start;
  padding-bottom: 1rem;
  padding-left: 10%;
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.45px;
  line-height: 34.5px;
`;

// Function Components

type FormInputProps = {
  id: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  type: string;
  value?: string;
};

export const FormInputTemplate: VoidFunctionComponent<FormInputProps> =
  props => {
    return (
      <FormInputWrapper>
        <FormLabel htmlFor={props.id}>{props.placeholder}</FormLabel>
        <FormInput
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type}
        />
      </FormInputWrapper>
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
