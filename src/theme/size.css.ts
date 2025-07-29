import { createGlobalTheme } from '@vanilla-extract/css';

export const size = createGlobalTheme(':root', {
  radius: {
    tiny: '2px',
    normal: '4px',
    medium: '6px',
    large: '8px',
    full: '9999px',
  },
  shadow: {
    border: '0 0 0 1px',
    tiny: '0 1px 2px 0',
    normal: '0 4px 6px -1px',
    medium: '0 10px 15px -3px',
    large: '0 20px 25px -5px',
  },
});
