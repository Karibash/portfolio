import { createGlobalTheme } from '@vanilla-extract/css';

export const size = createGlobalTheme(':root', {
  radius: {
    tiny: '2px',
    normal: '4px',
    medium: '6px',
    large: '8px',
    full: '9999px',
  },
});
