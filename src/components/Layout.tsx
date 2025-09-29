import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import ScrollToTopComponent from './ScrollToTopComponent';
import { Separator } from './ui/separator';
import { ResponsiveNav } from './ResponsiveNav';
import { motion } from "framer-motion"

export default function Layout() {
  return <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 flex flex-col md:flex-row gap-2 mb-10"
    >
      <ResponsiveNav />
      <div className="mt-5 md:mt-10 flex-1">
        <Outlet />
        <Separator className="mt-7" />
        <Footer />
      </div>
      <ScrollToTopComponent />
    </motion.main>
}