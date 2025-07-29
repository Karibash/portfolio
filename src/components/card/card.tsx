import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import * as styles from './card.css';

import type { ComponentProps, FC } from 'react';

export type CardProps = ComponentProps<'div'> & {
  asChild?: boolean | undefined;
};

export const Card: FC<CardProps> = ({
  className,
  children,
  asChild,
  ...props
}) => {
  const Wrapper = asChild ? Slot : 'div';
  return (
    <Wrapper {...props} className={clsx(styles.wrapper, className)}>
      {children}
    </Wrapper>
  );
};
