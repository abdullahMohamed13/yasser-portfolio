import { MdOutlineQueryStats } from 'react-icons/md'
import { AiOutlineIdcard } from 'react-icons/ai'
import { FaChartBar } from 'react-icons/fa'

export const navigationElements = [
  {
    label: "About me",
    href: "#about",
    icon: <AiOutlineIdcard />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <FaChartBar />,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: <MdOutlineQueryStats />,
  },
]