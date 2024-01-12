import type { Metadata } from 'next';

import { Layout as MainLayout } from '@/ui/commons';

export const metadata: Metadata = {
  title: 'Technician Dashboard',
  description: 'The product and services pages',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => <MainLayout>{children}</MainLayout>;

export default Layout;
