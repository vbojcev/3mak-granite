import { AppShell, Button, Group, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import Router from './Router';
import Logo from './components/Logo';

const App = () => {
  // From https://mantine.dev/styles/responsive/
  const mobile = useMediaQuery(`(max-width: ${em(750)})`);

  const [page, setPage] = useState<string>('portfolio');

  return (
    <AppShell header={{ height: { base: 60, md: 70, lg: 80 } }} padding="md">
      <AppShell.Header className="header">
        <Group
          h="100%"
          w="100%"
          px="md"
          justify="space-between"
          className="headerGroup"
        >
          <div onClick={() => setPage('portfolio')}>
            <Logo />
          </div>
          <Group>
            <Button
              size={mobile ? 'xs' : 'sm'}
              onClick={() => setPage('about')}
              color="rgba(255, 0, 0, 1)"
            >
              About Us
            </Button>
            <Button
              size={mobile ? 'xs' : 'sm'}
              onClick={() => setPage('contact')}
              color="rgba(255, 0, 0, 1)"
            >
              Contact
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main className="mainShell">
        <Router page={page} mb={mobile} />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
