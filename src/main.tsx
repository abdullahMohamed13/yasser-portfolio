import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout.tsx'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-context.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import { Toaster } from "sonner"
import { Skeleton } from './components/ui/skeleton.tsx'
// Lazy load these plz
const ErrorPage = lazy(() => import('./ErrorPage.tsx'));
const ProjectDetails = lazy(() => import('./sections/ProjectDetails.tsx'));

const withSuspense = (comp: React.ReactNode) => (
  <Suspense fallback={<Skeleton />}>
    {comp}
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: withSuspense(<ErrorPage />),
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'projects/:name',
        element: withSuspense(<ProjectDetails />)
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <SidebarProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster />
          <RouterProvider router={router} />
        </ThemeProvider>
      </SidebarProvider>
  </StrictMode>,
)
