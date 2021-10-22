import { css } from 'styled-components';
import { size } from '../assets/mediaSizes';

const { desktopS } = size;

export type LineClampProps = {
  numberOfLines?: number;
};

export const maxMargin = css`
  padding: 0.5rem calc((100vw - ${desktopS}) / 2);
`;

export const lineClamping = css<LineClampProps>`
  /* stylelint-disable -- Is deleting webkit rules. */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ numberOfLines }) => numberOfLines || 1};
  -webkit-box-orient: vertical;
  /* stylelint-enable */
`;
