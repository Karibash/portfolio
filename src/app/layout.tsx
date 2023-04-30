import { Inter } from 'next/font/google';

import type { FC } from 'react';

import 'modern-normalize/modern-normalize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Karibash',
  description: 'Personal website of Karibash.',
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
