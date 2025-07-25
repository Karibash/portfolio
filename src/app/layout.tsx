import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import 'modern-normalize/modern-normalize.css';
import './layout.css';

export const metadata: Metadata = {
  title: 'Karibash',
  description: 'Personal website of Karibash.',
};

export type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
