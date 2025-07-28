import { keyframes, style } from '@vanilla-extract/css';

import { palette, size } from '../../theme';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, calc(100% / 9))',
  gridTemplateRows: 'repeat(9, calc(100% / 9))',
  overflow: 'hidden',
  backgroundColor: palette.zinc950,
});

export const layer = style({
  opacity: 0.8,
  filter: 'blur(80px)',
  borderRadius: size.radius.full,
  willChange: 'transform',
});

const float1 = keyframes({
  '0%': { transform: 'translate(0, 0) scale(1.0) rotate(0deg)' },
  '25%': { transform: 'translate(10%, -5%) scale(1, 1.2) rotate(40deg)' },
  '55%': { transform: 'translate(-15%, 20%) scale(1.1, 1) rotate(80deg)' },
  '80%': { transform: 'translate(5%, 10%) scale(1.25, 1) rotate(140deg)' },
  '100%': { transform: 'translate(0, 0) scale(1.0) rotate(200deg)' },
});

export const layer1 = style({
  gridArea: '1 / 2 / 9 / 10',
  animation: `${float1} 12s ease-in-out infinite alternate`,
  background: `radial-gradient(circle, ${palette.red950} 0%, transparent 95%)`,
});

const float2 = keyframes({
  '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
  '30%': { transform: 'translate(-20%, 10%) scale(1, 0.9) rotate(60deg)' },
  '60%': { transform: 'translate(15%, -10%) scale(1.3, 1) rotate(120deg)' },
  '100%': { transform: 'translate(0, 0) scale(1) rotate(180deg)' },
});

export const layer2 = style({
  gridArea: '2 / 1 / 10 / 9',
  animation: `${float2} 16s ease-in-out infinite alternate`,
  background: `radial-gradient(circle, ${palette.red950} 0%, transparent 95%)`,
});

const float3 = keyframes({
  '0%': { transform: 'translate(0, 0) scale(1.25, 1) rotate(0deg)' },
  '20%': { transform: 'translate(5%, -20%) scale(1.0, 1) rotate(50deg)' },
  '50%': { transform: 'translate(-10%, 25%) scale(1, 1.15) rotate(90deg)' },
  '90%': { transform: 'translate(10%, 0%) scale(1, 1.3) rotate(170deg)' },
  '100%': { transform: 'translate(0, 0) scale(1.3, 1.1) rotate(200deg)' },
});

export const layer3 = style({
  gridArea: '1 / 1 / 6 / 6',
  animation: `${float3} 6s ease-in-out infinite alternate`,
  background: `radial-gradient(circle, ${palette.red800} 0%, transparent 70%)`,
});

const float4 = keyframes({
  '0%': { transform: 'translate(0, 0) scale(1, 1.25) rotate(0deg)' },
  '40%': { transform: 'translate(-15%, -5%) scale(1, 1.05) rotate(80deg)' },
  '70%': { transform: 'translate(20%, 15%) scale(1.2, 1) rotate(140deg)' },
  '100%': { transform: 'translate(0, 0) scale(1.1, 1.3) rotate(210deg)' },
});

export const layer4 = style({
  gridArea: '5 / 5 / 10 / 10',
  animation: `${float4} 8s ease-in-out infinite alternate`,
  background: `radial-gradient(circle, ${palette.red900} 0%, transparent 70%)`,
});
