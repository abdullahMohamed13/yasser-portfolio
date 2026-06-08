import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout.tsx'
import App from './App.tsx'
import ErrorPage from './ErrorPage.tsx'
import ProjectDetails from './sections/ProjectDetails.tsx'
import { ThemeProvider } from './components/theme-context.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import { Toaster } from "sonner"

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
        path: 'projects/:name',
        element: <ProjectDetails />
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
