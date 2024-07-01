import { RouteObject } from 'react-router-dom';

import Layout from 'app/Layout';

import Resume from 'pages/Resume';
import ResumeHandle from 'pages/Resume/handle';

import Documentation from 'pages/Documentation';
import DocumentationHandle from 'pages/Documentation/handle';

import ErrorPage from 'pages/ErrorPage';
import ErrorPageHandle from 'pages/ErrorPage/handle';

import NotFound from 'pages/NotFound';
import NotFoundHandle from 'pages/NotFound/handle';

import withErrorBoundary from './withErrorBoundary';

const dataRoutes: RouteObject[] = [
  withErrorBoundary({
    Component: Layout,
    children: [
      withErrorBoundary({
        path: '/',
        Component: Resume,
        handle: ResumeHandle,
      }),
      withErrorBoundary({
        path: '/documentation',
        Component: Documentation,
        handle: DocumentationHandle,
      }),
      withErrorBoundary({
        path: '/error',
        Component: ErrorPage,
        handle: ErrorPageHandle,
      }),
      withErrorBoundary({
        path: '*',
        Component: NotFound,
        handle: NotFoundHandle,
      }),
    ],
  }),
];

export default dataRoutes;
