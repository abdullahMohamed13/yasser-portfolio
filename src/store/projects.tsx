import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PowerBILogo from '/skills/PowerBI.svg'
import ExcelLogo from '/skills/Excel.png'
import MicrosoftPQLogo from '/skills/microsoft-power-query.png'
import DaxLogo from '/skills/dax.svg'

export interface ProjectProps {
    // FOR ProjectCard in home page
    id: number
    name: string
    description: string
    imgSrc: string[]
    links: {
        name: string,
        href: string,
        icon: React.ReactNode
    }[]
    techStack: {
        name: string
        icon: React.ReactNode
    }[]

    // FOR ProjectDetails page
    detailedDescription?: string
    conclusion?: string
    content?: {
        title: string,
        img: string,
        text: string
    }[]
    skillsDemonstrated?: {
        key: string
        value: string
    }[]
    KPIs?: {
        img: string;
        items: {
            key: string
            value: string
        }[]
    }
    businessValue?: string[]
}

const iconSize = 'w-6 h-6'

export const projects: ProjectProps[] = [
    {
        id: 0,
        name: 'Comprehensive Sales Performance Dashboard',
        imgSrc: ['/projects/2.jpeg'],
        description: 'Interactive dashboard that transforms complex sales data into actionable business insights.',
        detailedDescription: "This interactive Sales Dashboard was built in Power BI to analyze and monitor key business performance metrics. It provides a clear view of sales performance, profitability, discount impact, and customer trends, allowing stakeholders to make data-driven decision",
        links: [
            {
                name: 'Github Repo',
                href: 'https://github.com/YasserAllam/Sales-Dashboard',
                icon: <FaGithub className='cursor-pointer hover:text-foreground/50' size={23} />
            },
            {
                name: 'Linkedin Post',
                href: 'https://www.linkedin.com/posts/yasser-allam-4b02ab331_powerbi-dataanalytics-businessintelligence-activity-7368121539352813569-GtPJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg',
                icon: <FaLinkedin className='cursor-pointer hover:text-[#0a66c2]' size={23} />
        }],
        techStack: [
            {
                name: 'PQ',
                icon: <img src={MicrosoftPQLogo} alt="Microsoft Power Query Logo" className={iconSize} />
            },
            {
                name: 'Power BI',
                icon: <img src={PowerBILogo} alt="Power BI Logo" className={iconSize} />,
            },
            {
                name: 'Excel',
                icon: <img src={ExcelLogo} alt="Excel Logo" className={iconSize} />
            },
            {
                name: 'DAX',
                icon: <img src={DaxLogo} alt="DAX Logo" className={iconSize} />
            },
            ],
        skillsDemonstrated: [
            {
                key: '🧹 Data Cleaning & Preparation',
                value: '(Excel → Power BI integration)',
            },
            {
                key: '⚙️ Data Transformation (ETL) with Power Query',
                value: 'Cleaned, shaped, and prepared the raw data for analysis by handling blanks, changing data types, and creating new columns.',
            },
            {
                key: '🔗 Basic Data Modeling',
                value: '(Table Relationships)',
            },
            {
                key: '🧮 Data Modeling & DAX calculations',
                value: 'using relationships and Formulated measures to derive key insights and KPIS like Total sales, total profit and orders count.',
            },
            {
                key: '📊 Core Charts',
                value: 'Utilized Column, Bar, Line, scatter chart and tables',
            },
            {
                key: '🔢 KPI Indicators & Tables',
                value: 'Used Cards to display key metrics and Tables to provide granular, sortable data.',
            },
            {
                key: '🎨 Dashboard Design',
                value: 'Designed an intuitive and visually appealing layout, exploring both common and uncommon chart types to best tell the data story.',
            },
        ],
        KPIs: {
            img: '/projects/project-2-kpis.png',
            items: [
                {key: 'Total Sales', value: '2.3M'},
                {key: 'Total Profit', value: '286K'},
                {key: 'Total Quantity', value: '38K'},
                {key: 'Total Shipping Cost', value: '226K'},
                {key: 'Cost of Goods Sold', value: '1.69M'},
                {key: 'Discount Value', value: '323K'},
            ]},
        businessValue: [
            'Identify top-performing products, categories, and regions.',
            'Detect unprofitable products and reevaluate discount strategies.',
            'Focus investments on high-growth markets.',
            'Improve profitability by aligning pricing and promotions with data insights.'
        ]
    },
    
    {
        id: 1,
        name: 'Data Jobs Dashboard',
        imgSrc: ['/projects/1-1.jpeg', '/projects/1-2.jpeg'],
        description: 'A comprehensive Data Jobs Dashboard for job seekers, career transitioners, and market researchers',
        detailedDescription: 'This dashboard was created for Job Seekers, Job Transtioners, and Job Sweepers to solve a common problem: information about the data job market is scattered and hard to grasp. Using a real-world dataset of 2024 data science job posting (Including titles, salaries, and locations), this project provides a single, easy-to-use interface to explore market trends and compernsation. I made this dashboard as part of a learning tutorial was going through',
        conclusion: 'This dashboard showcases how Power BI can transform raw job posting data into a powerful tool for career analysis. It allows users to slice, filter, and drill through data to make informed decisions about their career path.',
        links: [
            {
                name: 'Github Repo',
                href: 'https://github.com/YasserAllam/Power-bi-data-jobs-dashboard',
                icon: <FaGithub className='cursor-pointer hover:text-foreground/50' size={23} />
            },
            {
                name: 'Linkedin Post',
                href: 'https://www.linkedin.com/posts/yasser-allam-4b02ab331_powerbi-datavisualization-businessintelligence-activity-7365237367600828417-J9Qg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg',
                icon: <FaLinkedin className='cursor-pointer hover:text-[#0a66c2]' size={23} />
        }],
        techStack: [
            {
                name: 'PQ',
                icon: <img src={MicrosoftPQLogo} alt="Microsoft Power Query Logo" className={iconSize} />,
            },
            {
                name: 'Power BI',
                icon: <img src={PowerBILogo} alt="Power BI Logo" className={iconSize} />,
            },
            {
                name: 'DAX',
                icon:<img src={DaxLogo} alt="DAX Logo" className={iconSize} />,
            },
        ],
        skillsDemonstrated: [
            {
                key: '⚙️ Data Transformation (ETL) with Power Query',
                value: 'Cleaned, shaped, and prepared the raw data for analysis by handling blanks, changing data types, and creating new columns.',
            },
            {
                key: '🔗 Basic Data Modeling',
                value: '(Table Relationships)',
            },
            {
                key: '🧮 Implicit Measures And Explicit Measures',
                value: "Formulated measures to derive key insights and KPIS like Median Yearly Salary and Job Count'.",
            },
            {
                key: '📊 Core Charts',
                value: 'Utilized Column, Bar, Line, and Area Chart to compare job counts and track trends over time.',
            },
            {
                key: '🗺️ Geospatial Analysis',
                value: 'Leveraged Map Charts to visualize the global distributkon of jobs.',
            },
            {
                key: '🔢 KPI Indicators & Tables',
                value: 'Used Cards to display key metrics and Tables to provide granular, sortable data.',
            },
            {
                key: '🎨 Dashboard Design',
                value: 'Designed an intuitive and visually appealing layout, exploring both common and uncommon chart types to best tell the data story.',
            },
        ],
        content: [
            {
                title: 'High-Level market view',
                img: '/projects/1-1.jpeg',
                text: "This is your mission control for the data job market. It showcases key KPIS like total job count, median salaries, and top job titles to give you a quick understanding of what's happening in the job market at a glance.",
            },
            {
                title: 'Drill through job title',
                img: '/projects/1-2.jpeg',
                text: "This is the deep-dive page. From the main dashboard, you can drill through to this view to get specific details for a single job title, including salary ranges, work-from-home stats, top hiring platforms, and a global map of job locations.",
            },
        ]
    },
]