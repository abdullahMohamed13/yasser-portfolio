import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import ScrollToTopComponent from './ScrollToTopComponent';
import { Separator } from './ui/separator';
import { ResponsiveNav } from './ResponsiveNav';

export default function Layout() {
  return (
    <main className="w-full max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row gap-2 mb-10">
      <ResponsiveNav />
      <div className="mt-5 md:mt-10 flex-1">
        <Outlet />
        <Separator className="mt-7" />
        <Footer />
      </div>
      <ScrollToTopComponent />
    </main>
  );
}