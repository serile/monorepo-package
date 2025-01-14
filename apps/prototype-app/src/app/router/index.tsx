import { lazy } from 'react'

import { IndexPage } from '@pages/index'
import { SignInPage } from '@pages/sign-in'
import { SignUpPage } from '@pages/sign-up'
import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router'

import { Layout } from './layout'

const MainPage = lazy(() => import('@pages/main').then((module) => ({ default: module.MainPage })))
const SettingPage = lazy(() => import('@pages/setting').then((module) => ({ default: module.SettingPage })))

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
          {
            path: 'setting',
            element: <SettingPage />,
          },
        ],
      },
    ],
  },
])
