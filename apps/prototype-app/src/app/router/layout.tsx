import { Anchor, AppShell, Burger, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, useNavigate } from 'react-router'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const [opened, { toggle }] = useDisclosure()

  const handleSignOutClick = () => {
    window.localStorage.removeItem('accessToken')
    void navigate('/sign-in')
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Flex justify="space-between">
          <div>Logo</div>
          <Anchor onClick={handleSignOutClick}>Sign out</Anchor>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Link to="/main">Main</Link>
        <Link to="/setting">Setting</Link>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
