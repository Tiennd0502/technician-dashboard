import type { Metadata } from 'next';

import { Provider } from '@/lib/providers';

export const metadata: Metadata = {
  title: 'Technician Dashboard',
  description: 'The home page in technical dashboard',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
