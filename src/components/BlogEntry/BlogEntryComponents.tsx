import styled from 'styled-components';

export const Padding = styled.div`
  padding: 2rem;
`;

export const Thumbnail = styled.img`
  width: 4rem;
  height: auto;
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
`;

export const AuthorContainer = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  margin: 1rem 0;
  gap: 1rem;
  grid-auto-flow: column;
`;
