import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-context.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import Layout from './components/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectDetails from './sections/ProjectDetails.tsx'
import ErrorPage from './ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'projects',
        element: <ProjectDetails />
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <SidebarProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </SidebarProvider>
  </StrictMode>,
)
