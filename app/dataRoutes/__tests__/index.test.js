import React from 'react';

import Layout from 'app/layouts/Panda';

import Resume from 'pages/Resume';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

import dataRoutes from '../index';

function MockedLayout() {
  return (
    <h1>Layout</h1>
  );
}

function MockedResume() {
  return (
    <h1>Resume Page</h1>
  );
}

function MockedNotFound() {
  return (
    <h1>NotFound Page</h1>
  );
}

function MockedErrorPage() {
  return (
    <h1>Error Page</h1>
  );
}

jest.mock('app/layouts/Panda', function MockLayout() {
  return MockedLayout;
});

jest.mock('pages/Resume', function MockResume() {
  return MockedResume;
});
jest.mock('pages/ErrorPage', function MockErrorPage() {
  return MockedErrorPage;
});
jest.mock('pages/NotFound', function MockNotFound() {
  return MockedNotFound;
});

function findRouteByPath(routes, path) {
  return routes.find(function matchRouteToPath(route) {
    return route.path === path;
  });
}

describe('dataRoutes', () => {
  const layoutRoute = dataRoutes[0];

  test('is an array of route objects', () => {
    expect(dataRoutes).toEqual(expect.any(Array));
    expect(dataRoutes.length).toBe(1);
  });

  describe('root Layout route', () => {
    test('nests the other routes', () => {
      expect(layoutRoute.children).toEqual(expect.any(Array));
      expect(layoutRoute.children.length).toBe(3);

      for (const route of layoutRoute.children) {
        expect(route).toEqual(expect.objectContaining({
          path: expect.any(String),
          Component: expect.any(Function),
        }));
      }
    });

    test('does not define a path', () => {
      expect(layoutRoute.path).toBe(undefined);
    });

    test('defines an error boundary', () => {
      expect(layoutRoute).toEqual(expect.objectContaining({
        errorElement: <MockedErrorPage />,
      }));
    });

    test('assigns the Layout component', () => {
      expect(layoutRoute).toEqual(expect.objectContaining({
        Component: Layout,
      }));
    });
  });

  describe('resume route "/"', () => {
    const path = '/';
    const resumeRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(resumeRoute).not.toBe(undefined);
    });

    test('defines an error boundary', () => {
      expect(resumeRoute).toEqual(expect.objectContaining({
        errorElement: <MockedErrorPage />,
      }));
    });

    test('assigns the Home component', () => {
      expect(resumeRoute).toEqual(expect.objectContaining({
        path,
        Component: Resume,
        handle: expect.objectContaining({
          head: expect.objectContaining({
            tags: expect.any(Object),
          }),
        }),
      }));
    });
  });

  describe('error page route "/error"', () => {
    const path = '/error';
    const errorRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(errorRoute).not.toBe(undefined);
    });

    test('defines an error boundary', () => {
      expect(errorRoute).toEqual(expect.objectContaining({
        errorElement: <MockedErrorPage />,
      }));
    });

    test('assigns the ErrorPage component', () => {
      expect(errorRoute).toEqual(expect.objectContaining({
        path,
        Component: ErrorPage,
      }));
    });
  });

  describe('not-found route "*"', () => {
    const path = '*';
    const notFoundRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(notFoundRoute).not.toBe(undefined);
    });

    test('is the last route defined', () => {
      expect(layoutRoute.children[layoutRoute.children.length - 1]).toBe(notFoundRoute);
    });

    test('defines an error boundary', () => {
      expect(notFoundRoute).toEqual(expect.objectContaining({
        errorElement: <MockedErrorPage />,
      }));
    });

    test('assigns the NotFound component', () => {
      expect(notFoundRoute).toEqual(expect.objectContaining({
        path,
        Component: NotFound,
      }));
    });
  });
});
