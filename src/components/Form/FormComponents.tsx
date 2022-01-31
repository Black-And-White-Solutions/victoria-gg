import React, { VoidFunctionComponent, ChangeEventHandler } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { size } from '../../assets/mediaSizes';

const { tablet } = size;

// Styled Components

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  border-radius: 75px 0;
`;

export const FormDoubleInput = styled.div`
  display: flex;
  width: 88%;
  height: fit-content;
  gap: 1.5rem;

  @media screen and (max-width: ${tablet}) {
    width: 100%;
    flex-wrap: wrap;
    gap: 0;
  }
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

  &.wrong {
    border: solid 1px #c46210;
    color: #c46210;
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

  &.wrong {
    color: #c46210;
  }
`;

export const TitleSmall = styled.h2`
  align-self: flex-start;
  padding-bottom: 1rem;
  padding-left: 2rem;
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.45px;
  line-height: 34.5px;
`;

const SpinnerKeyframes = keyframes`
	from {
		transform: rotate(0deg);
	} to {
		transform: rotate(360deg);
	}
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #ff5cb9;
  animation: ${SpinnerKeyframes} 1s linear infinite;
  border-radius: 50%;
`;

// Function Components

type FormInputProps = {
  className?: string;
  id: string;
  isWrong?: boolean;
  min?: number;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type: string;
  value?: string;
};

export const FormInputTemplate: VoidFunctionComponent<FormInputProps> =
  props => {
    const classNameValue: () => string = () => {
      return props.isWrong ? 'wrong' : '';
    };

    return (
      <FormInputWrapper>
        <FormLabel className={props.className} htmlFor={props.id}>
          {props.placeholder}
        </FormLabel>
        <FormInput
          className={props.isWrong ? classNameValue() : ''}
          id={props.id}
          min={props.min}
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
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isWrong: PropTypes.bool,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
