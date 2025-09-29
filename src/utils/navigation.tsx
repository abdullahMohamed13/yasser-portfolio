import type { NavigateFunction, Location } from "react-router-dom";
import { MdOutlineQueryStats } from 'react-icons/md'
import { AiOutlineIdcard } from 'react-icons/ai'
import { FaChartBar } from 'react-icons/fa'

export const navigationItems = [
  {
    title: "About me",
    url: "#about",
    icon: <AiOutlineIdcard />,
  },
  {
    title: "Projects",
    url: "#projects",
    icon: <FaChartBar />,
  },
  {
    title: "Skills",
    url: "#skills",
    icon: <MdOutlineQueryStats />,
  },
]

export const handleNavigation = (url: string, navigate: NavigateFunction, location: Location) => {
    if (location.pathname === "/") {
        const sectionId = url.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        navigate('/' + url);
        return null
    }
};
