import { AppShell, Button, Group, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import Router from './Router';
import Logo from './components/Logo';

const App = () => {
  // From https://mantine.dev/styles/responsive/
  const mobile = useMediaQuery(`(max-width: ${em(750)})`);

  const [page, setPage] = useState<string>('home');

  return (
    <AppShell header={{ height: { base: 60, md: 70, lg: 80 } }} padding="md">
      <AppShell.Header>
        <Group
          h="100%"
          w="100%"
          px="md"
          justify="space-between"
          className="header"
        >
          <div onClick={() => setPage('home')}>
            <Logo />
          </div>
          <Group>
            <Button
              size={mobile ? 'xs' : 'sm'}
              onClick={() => setPage('portfolio')}
            >
              Portfolio
            </Button>
            <Button
              size={mobile ? 'xs' : 'sm'}
              onClick={() => setPage('contact')}
            >
              Contact
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Router page={page} mb={mobile} />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
