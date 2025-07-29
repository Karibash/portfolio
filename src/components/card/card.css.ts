import { style } from '@vanilla-extract/css';

import { palette, size } from '../../theme';

export const wrapper = style({
  backdropFilter: 'blur(4px)',
  borderRadius: size.radius.medium,
  border: `1px solid color-mix(in srgb, ${palette.zinc950} 30%, transparent)`,
  backgroundColor: `color-mix(in srgb, ${palette.zinc950} 20%, transparent)`,
  boxShadow: `${size.shadow.medium} color-mix(in srgb, ${palette.zinc50} 10%, transparent)`,
});
