import { Outlet } from 'react-router-dom'
import ScrollToTopComponent from './ScrollToTopComponent';
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
      <div className="my-5 md:my-10 flex-1">
        <Outlet />
      </div>
      <ScrollToTopComponent />
    </motion.main>
}