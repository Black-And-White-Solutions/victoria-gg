import styled from 'styled-components';
// import { size } from '../../assets/mediaSizes';

// const { desktopS, tablet, mobileL } = size;

export const FormCard = styled.div`
  display: flex;
  width: 70%;
  height: 520px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 75px 0;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.25);
`;

export const FormInput = styled.input`
  width: 80%;
  height: 3rem;
  padding: 0 2rem;
  border: none;
  margin: 1rem 0;
  background: #fff0f0;
  border-radius: 15px;
  color: #575155;
  font-size: 1.3em;
  font-weight: 400;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

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
