import { IndexPage } from '@pages/index'
import { MainPage } from '@pages/main'
import { SignInPage } from '@pages/sign-in'
import { SignUpPage } from '@pages/sign-up'
import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router'

import { Layout } from './layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: [
          {
            path: 'main',
            element: <MainPage />,
          },
        ],
      },
    ],
  },
])
