import { css } from 'styled-components';
import { size } from '../assets/mediaSizes';

const { desktopS } = size;

export const maxMargin = css`
  padding: 0.5rem calc((100vw - ${desktopS}) / 2);
`;
