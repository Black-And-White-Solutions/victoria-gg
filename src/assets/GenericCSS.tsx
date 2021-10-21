import { css } from 'styled-components';
import { size } from '../assets/mediaSizes';

const { desktopS } = size;

export type LineClampProps = {
  numberOfLines?: number;
};

export const maxMargin = css`
  padding: 0.5rem calc((100vw - ${desktopS}) / 2);
`;

/* stylelint-disable -- Is deleting webkit rules. */
export const lineClamping = css<LineClampProps>`
  display: box;
  overflow: hidden;
  box-orient: vertical;
  -webkit-line-clamp: ${({ numberOfLines }) => numberOfLines || 1};
  text-overflow: ellipsis;
`;
/* stylelint-enable */
