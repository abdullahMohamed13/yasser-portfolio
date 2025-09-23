import { Outlet } from 'react-router-dom'
import { AppSidebar } from './app-sidebar'

export default function Layout() {
    return  <main className='flex gap-2 mt-10 mb-40 mx-5'>
            <AppSidebar />
            <Outlet />
        </main>
}
