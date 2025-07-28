import { clsx } from 'clsx';

import * as styles from './background.css';

import type { ComponentProps, FC } from 'react';

export type BackgroundProps = ComponentProps<'div'>;

export const Background: FC<BackgroundProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(styles.container, className)}
      role="presentation"
      {...props}
    >
      <div className={clsx(styles.layer, styles.layer1)} />
      <div className={clsx(styles.layer, styles.layer2)} />
      <div className={clsx(styles.layer, styles.layer3)} />
      <div className={clsx(styles.layer, styles.layer4)} />
    </div>
  );
};
