import { globalStyle, style } from '@vanilla-extract/css';

import { palette } from '../theme';

globalStyle(':root', {
  fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
});

export const body = style({
  display: 'grid',
  color: palette.zinc50,
  backgroundColor: palette.zinc950,
});

export const background = style({
  gridArea: '1 / 1',
  width: '100lvw',
  height: '100lvh',
});

export const container = style({
  gridArea: '1 / 1',
});
