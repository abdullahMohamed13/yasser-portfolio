import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PowerBILogo from '/skills/PowerBI.svg'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import ExcelLogo from '/skills/Excel.png'
import MicrosoftPQLogo from '/skills/microsoft-power-query.png'
import DaxLogo from '/skills/dax.svg'

export interface ProjectProps {
    id: number
    name: string
    description: string
    imgSrc: string[]
    // description: string
    links: {
        name: string,
        href: string,
        icon: React.ReactNode
    }[]
    techStack: {
        name: string[],
        icons: React.ReactNode[]
    }
}

const linkedinIcon = (
<Tooltip>
    <TooltipTrigger>
        <FaLinkedin className='cursor-pointer hover:text-[#0a66c2]' size={23} />
    </TooltipTrigger>
    <TooltipContent>
        Project Post
    </TooltipContent>
</Tooltip>
)

const githubIcon = (
<Tooltip>
    <TooltipTrigger>
        <FaGithub className='cursor-pointer hover:text-foreground/50' size={23} />
    </TooltipTrigger>
    <TooltipContent>
        Project Repository
    </TooltipContent>
</Tooltip>
)

const iconSize = 'w-6 h-6'

export const projects: ProjectProps[] = [
    {
        id: 0,
        name: 'Comprehensive Sales Performance Dashboard!',
        imgSrc: ['/projects/2.jpeg'],
        description: 'Interactive dashboard that transforms complex sales data into actionable business insights.',
        links: [
            {
                name: 'github repo',
                href: 'https://github.com/YasserAllam/Sales-Dashboard',
                icon: githubIcon
            },
            {
                name: 'linkedin post',
                href: 'https://www.linkedin.com/posts/yasser-allam-4b02ab331_powerbi-dataanalytics-businessintelligence-activity-7368121539352813569-GtPJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg',
                icon: linkedinIcon
        }],
        techStack: {
            name: ['Power BI', 'Power Query', 'DAX', 'Excel'],
            icons: [
                <img src={MicrosoftPQLogo} alt="Microsoft Power Query Logo" className={iconSize} />,
                <img src={PowerBILogo} alt="Power BI Logo" className={iconSize} />,
                <img src={ExcelLogo} alt="Excel Logo" className={iconSize} />,
                <img src={DaxLogo} alt="DAX Logo" className={iconSize} />,
            ]
        },
    },
    
    {
        id: 1,
        name: 'Power BI dashboard',
        imgSrc: ['/projects/1-1.jpeg', '/projects/1-2.jpeg'],
        description: 'A comprehensive Data Jobs Dashboard for job seekers, career transitioners, and market researchers',
        links: [
            {
                name: 'github repo',
                href: 'https://github.com/YasserAllam/Power-bi-data-jobs-dashboard',
                icon: githubIcon
            },
            {
                name: 'linkedin post',
                href: 'https://www.linkedin.com/posts/yasser-allam-4b02ab331_powerbi-datavisualization-businessintelligence-activity-7365237367600828417-J9Qg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg',
                icon: linkedinIcon
        }],
        techStack: {
            name: ['Power BI', 'Power Query', 'DAX'],
            icons: [<img src={MicrosoftPQLogo} alt="Microsoft Power Query Logo" className={iconSize} />,
                <img src={PowerBILogo} alt="Power BI Logo" className={iconSize} />,
                <img src={DaxLogo} alt="DAX Logo" className={iconSize} />,
            ]
        },
    },
]