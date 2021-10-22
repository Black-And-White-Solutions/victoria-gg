import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

export const StyledContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  width: 80%;
  padding: 2rem;
  margin: 2rem;
  margin-bottom: 8px;
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

export const Card = styled(NavLink)`
  display: flex;
  width: 40%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #ff5cb9;
  border-radius: 45px 0;
  gap: 1rem;
  text-decoration: none;

  h2 {
    color: #ffffff;
    font-family: 'Dancing Script', cursive;
    font-style: normal;
    font-weight: 700;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 8rem;
  text-align: center;
`;

export const CardShowcase = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 2rem auto;
`;
