import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PowerBILogo from '/skills/PowerBI.svg'
import ExcelLogo from '/skills/Excel.png'
import MicrosoftPQLogo from '/skills/microsoft-power-query.png'
import DaxLogo from '/skills/dax.png'

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
        sections:{
            img: string
            header?: string
            details: {
                title?: string
                text?: string
                decision?: string
            }[]
        }[]
    }[]
    problemsToSolve?: string[]
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
        id: 2,
        name: 'Marketing Analytics Dashboard',
        imgSrc: ['/projects/home-section/proj-3.png'],
        description: 'A project for exploring customer purchasing behavior — uncovering how factors like location, age, season, discounts, payment methods, and shipping preferences influence overall spending patterns.',
        detailedDescription: "This project analyzes customer purchasing data to uncover insights into spending behavior across various factors such as location, age, purchase frequency, seasonality, discounts, payment methods, shipping preferences, and subscription status. It identifies high-spending regions, compares shopping trends between younger and older customers, examines how purchase frequency and seasonal patterns affect spending, evaluates the impact of discounts and promo codes, and explores which payment and shipping options are most preferred. The findings help businesses understand customer behavior more deeply and make data-driven decisions to improve sales strategies and customer engagement.",
        problemsToSolve: [
            'Which location have the highest spending or purchase frequency?',
            'Do younger customers shop more frequently than older customers.',
            'How does the frequency of purchases (weekly, monthly, annually) affect overall spending?',
            'Do customers in different seasons (Winter, Summer, etc.) purchase certain items more often?',
            'Do customers spend more when discounts or promo codes are applied?',
            'Which payment methods (Credit Card, PayPal, Cash, etc.) are linked to higher purchase amounts?',
            'Which shipping type (Express, Free Shipping, Store Pickup, etc.) is most preferred?',
            'What impact do subscription status have on spending?',
        ],
        links: [
            {
                name: 'Github Repo',
                href: 'https://github.com/YasserAllam/Customer-Marketing-Analysis',
                icon: <FaGithub className='cursor-pointer hover:text-foreground/50' size={50} />
            },
            {
                name: 'Linkedin Post',
                href: '',
                icon: <FaLinkedin className='cursor-pointer hover:text-[#0a66c2]' size={50} />
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
                key: '🧮 Data Modeling & DAX calculations',
                value: 'using relationships and Formulated measures to derive key insights and KPIS like Total sales, total profit and orders count.',
            },
            {
                key: '📊 Core Charts',
                value: 'Utilized Column, Bar, Line, scatter chart and tables',
            },
            {
                key: '🎨 Dashboard Design',
                value: 'Designed an intuitive and visually appealing layout, exploring both common and uncommon chart types to best tell the data story.',
            },
        ],
        KPIs: {
            img: '/projects/detailed-page/proj-3/side_analysis.png',
            items: [
                {key: 'Unique Customers', value: '3.9K'},
                {key: 'Purchase Amount', value: '233K'},
            ]},
        businessValue: [
            'Understand customer behavior and preferences across multiple dimensions.',
            'Target the right audience with personalized marketing strategies.',
            'Optimize promotional campaigns based on spending and seasonal trends.',
            'Enhance logistics by identifying preferred shipping methods and regions.',
            'Allocate resources effectively toward high-value customers and areas.',
            'Enable data-driven decisions to boost sales, customer satisfaction, and profitability.'
        ],
        content: [
            {
                sections: [
                    {
                        img: '/projects/detailed-page/proj-3/top-row.png',
                        header: 'Top Row Breakdown',
                        details: [
                            {
                                title: 'Do younger customers shop more frequently than older customers? (Bar Chart by Age Bucket)',
                                text: 'Older customers (55-70) have the highest customer count (1178), meaning they shop more than younger age groups. So younger customers are less engaged.',
                                decision: "Highlight comfort, quality and premium options in marketing for this age group (55+).",
                            },
                            {
                                title: 'What impact do subscription statuses have on spending? (Pie Chart)',
                                text: 'Shows that only 27% are subscribers, and they spend more on average. Subscriptions boost spending, but most customers are still non-subscribers (73%).',
                                decision: "Offer sign-up discounts, bundle deals, or exclusive perks to increase subscriber base.",
                            },
                            {
                                title: 'How does the frequency of purchases affect overall spending? (Bar Chart)',
                                text: 'Customers who shop quarterly (69K) and fortnightly (65K) generate the highest spending, while weekly and monthly shoppers spend less. Suggests high-value customers shop less often but spend more per purchase.',
                                decision: "Encourage quarterly and fortnightly buyers with loyalty rewards.",
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-3/middle-row.png',
                        header: 'Middle Row Breakdown',
                        details: [
                            {
                                title: 'Do customers in different seasons purchase certain items more often? (Bar Chart with Seasonal Slicer)',
                                text: 'Allows filtering by season. Jackets (54) and hats (50) are the top purchased items, showing seasonal patterns in demand. Businesses can use this for seasonal promotions.',
                                decision: "Stock more items of the items thats most preferred in peak seasons, run promotions around these items",
                            },
                            {
                                title: 'Which category is more demanding? (Pie Chart)',
                                text: 'Clothing dominates demand (44.5%), followed by accessories (31.8%) and footwear (15%). Outerwear is the smallest segment. Inventory and marketing should prioritize clothing.',
                                decision: "Clothing should remain the main revenue driver but accessories are a strong secondary too. we can make a cross-sell accessories with clothing orders",
                            },
                            {
                                title: 'Which payment methods are linked to higher purchase amounts? (Bar Chart)',
                                text: 'PayPal (677) and Credit Cards (671) lead slightly over Cash (670). Debit Card, Venmo, and Bank Transfer are less used. This suggests promoting digital payment methods can align with customer preference.',
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-3/bottom-row.png',
                        header: 'Bottom Row Breakdown',
                        details: [
                            {
                                title: 'Which shipping type is most preferred ? (Line Chart)',
                                text: 'Free Shipping (675) is the most preferred, followed by Express (654). Premium shipping options (Next Day, 2-Day Air) have low purchase amounts. Customers strongly value free/low-cost shipping.',
                            },
                            {
                                title: 'Do customers spend more when discounts are applied? (Pie Chart)',
                                text: 'Yes: 99K purchases VS No: 134K. Customers spend significantly more when discounts are offered, confirming discounts are an effective sales driver.',
                                decision: "Keep using discounts, but measure profitability.",
                            },
                            {
                                title: 'Which locations have the highest spending? (Bar Chart by State)',
                                text: 'Top spenders: Montana (5.8K), Illinois (5.6K), California (5.6K). These states generate the highest purchase amounts, guiding where to focus regional campaigns.',
                                decision: "Focus regional marketing campaigns and ads on these high-spend states.",
                            },
                        ]
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        name: 'Sales Performance Dashboard',
        imgSrc: ['/projects/home-section/proj-2.jpeg'],
        description: 'An interactive Power BI dashboard that visualizes key KPIs, sales trends, and customer insights—helping businesses identify top products, assess discount impact, and make data-driven decisions to boost growth and profitability.',
        detailedDescription: "This interactive Sales Dashboard was built in Power BI to analyze and monitor key business performance metrics. It provides a clear view of sales performance, profitability, discount impact, and customer trends, allowing stakeholders to make data-driven decision",
        links: [
            {
                name: 'Github Repo',
                href: 'https://github.com/YasserAllam/Sales-Dashboard',
                icon: <FaGithub className='cursor-pointer hover:text-foreground/50' size={50} />
            },
            {
                name: 'Linkedin Post',
                href: 'https://www.linkedin.com/posts/yasser-allam-4b02ab331_powerbi-dataanalytics-businessintelligence-activity-7368121539352813569-GtPJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg',
                icon: <FaLinkedin className='cursor-pointer hover:text-[#0a66c2]' size={50} />
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
                value: 'Using relationships and Formulated measures to derive key insights and KPIS like Total sales, total profit and orders count.',
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
            img: '/projects/detailed-page/proj-2/kpis.png',
            items: [
                {key: 'Total Quantity', value: '38K'},
                {key: 'Total Shipping Cost', value: '226K'},
                {key: 'Total Profit', value: '286K'},
                {key: 'Total Sales', value: '2.3M'},
                {key: 'Cost of Goods Sold', value: '1.69M'},
                {key: 'Discount Value', value: '323K'},
            ]},
        businessValue: [
            'Identify top-performing products, categories, and regions.',
            'Detect unprofitable products and reevaluate discount strategies.',
            'Focus investments on high-growth markets.',
            'Improve profitability by aligning pricing and promotions with data insights.'
        ],
        content: [
            {
                sections: [
                    {
                        img: '/projects/detailed-page/proj-2/2-1.png',
                        header: 'Business Performance Insights',
                        details: [
                            {
                                title: 'Sales Trends',
                                text: 'A year-by-year breakdown (2014-2017) shows consistent growth in sales with some seasonal fluctuations.'
                            },
                            {
                                title: 'Category & Product Insights',
                                text: 'Office Supplies lead sales (60.3%); Phones and Chairs top products.'
                            },
                            {
                                title: 'Customer Segmentation',
                                text: 'Consumers dominate (50.56%) with strong Corporate and Home Office sales.'
                            }
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-2/2-2.png',
                        header: 'Discount Analysis',
                        details: [
                            {
                                text: "High discounts reduce profit; Tables and Bookcases drive losses."
                            }
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-2/2-3.png',
                        header: 'Geographic Sales & Profit Analysis',
                        details: [
                            {
                                title: 'Regional Analysis',
                                text: "West & East lead sales; South shows weaker profit margins."
                            },
                            {
                                title: 'City-level Breakdown',
                                text: "New York, Los Angeles, and Seattle drive top sales and profits."
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id: 0,
        name: 'Data Jobs Dashboard',
        imgSrc: ['/projects/home-section/proj_1-1.jpeg', '/projects/home-section/proj_1-2.jpeg'],
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
                sections: [
                    {
                        img: '/projects/home-section/proj_1-1.jpeg',
                        header: 'Page 1: High-Level market view',
                        details: [
                            {
                                text: "This is your mission control for the data job market. It showcases key KPIS like total job count, median salaries, and top job titles to give you a quick understanding of what's happening in the job market at a glance."
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-1/page1-top-row.png',
                        header: 'Top Row Breakdown',
                        details: [
                            {
                                title: 'Jobs posted count (479K)',
                                text: "Displays the total number of job postings analyzed in the dataset."
                            },
                            {
                                title: 'Median Yearly Salary ($113K)',
                                text: "The overall median annual salary for all data jobs analyzed."
                            },
                            {
                                title: 'Median Hourly Salary ($47.62)',
                                text: "The overall median hourly rate for all data jobs analyzed."
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-1/page1-middle-row.png',
                        header: 'Middle Row Breakdown',
                        details: [
                            {
                                title: 'What Is the Trend of Jobs in 2024?',
                                text: "Job demand peaked mid-year (around 51K postings in July) but dropped sharply toward September-October, before slightly rebounding in November. This may indicate seasonal or budget-cycle influences in hiring."
                            },
                            {
                                title: 'Yearly vs Hourly Salary of Data Jobs',
                                text: "Data Engineer and Machine Learning Engineer roles offer the highest yearly and hourly salaries, while Data Analysts are on the lower end. Salary growth correlates strongly with experience and technical specialization."
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-1/page1-bottom-row.png',
                        header: 'Bottom Row Breakdown',
                        details: [
                            {
                                title: 'What Is the Top Job in Data?',
                                text: "Data Engineer and Data Analyst are the top two in-demand roles, followed by Data Scientist. This shows the market's high need for roles that manage and interpret data pipelines."
                            },
                            {
                                title: 'Job Stats (Table)',
                                text: "A detailed table summarizes job counts, median yearly and hourly salaries, and trend sparklines for each role, showing that Data Engineers hold the highest job count (≈129K), senior roles such as Senior Data Scientist and Machine Learning Engineer earn the top salaries ($140K+), and the overall data job market remains diverse with steadily increasing salaries across seniority levels."
                            },
                        ]
                    },
                    {
                        img: '/projects/home-section/proj_1-2.jpeg',
                        header: 'Page 2: Drill through job title',
                        details: [
                            {
                                text: "This is the deep-dive page. From the main dashboard, you can drill through to this view to get specific details for a single job title, including salary ranges, work-from-home stats, top hiring platforms, and a global map of job locations."
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-1/page2-top-row.png',
                        header: 'Top Row Breakdown',
                        details: [
                            {
                                title: 'Median yearly and hourly salary',
                                text: "The median salary specific to the selected job role."
                            },
                            {
                                title: 'Health Insurance %, No Degree Mentioned %, Working From Home %',
                                text: "Shows percentages of job listings mentioning health benefits, no degree requirements, and remote work options for the selected role."
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-1/page2-middle-row.png',
                        header: 'Middle Row Breakdown',
                        details: [
                            {
                                title: 'Job globally ',
                                text: "Displays the worldwide distribution of the selected role job postings."
                            },
                            {
                                title: 'Where Can Developers Earn the Most?',
                                text: "Shows median salaries across different technologies or frameworks associated with the selected role."
                            },
                        ]
                    },
                    {
                        img: '/projects/detailed-page/proj-1/page2-bottom-row.png',
                        header: 'Bottom Row Breakdown',
                        details: [
                            {
                                title: 'What Are the Most Wanted Skills?',
                                text: "Lists the most in-demand technical skills for the selected role based on job postings."
                            },
                            {
                                title: 'Top Platform',
                                text: "Shows which job posting platforms post's the most for the selected role"
                            },
                            {
                                title: 'Job Schedule Type',
                                text: "Displays distribution of job types (full-time, part-time, contract, etc.) for the selected role."
                            },
                        ]
                    },
                ]
            },
        ]
    },
]
