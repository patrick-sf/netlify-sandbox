import * as React from 'react';
import { Container } from '../container/Container';
import * as styles from './Layout.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>
    <main className={styles.content}>
      <Container>{children}</Container>
    </main>
  </div>
);
