import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'work/:slug',
        element: <ProjectDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
