// Custom components
import HeaderSection from "@/components/HeaderSection";
// shadcn components
import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// LOGOS
import EnglishLanguageLogo from '/skills/united-kingdom.png'
import ArabicLanguageLogo from '/skills/saudi-arabia.png'
import PowerBILogo from '/skills/PowerBI.svg'
import ExcelLogo from '/skills/Excel.png'
import MicrosoftPQLogo from '/skills/microsoft-power-query.png'
import SQLLogo from '/skills/sql.svg'
import DaxLogo from '/skills/dax.svg'

// ICONS
// import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { MdOutlineIntegrationInstructions, MdWorkOutline, MdLanguage } from "react-icons/md";

const iconSize = 'h-10 w-10'
const tabs = [
  {
    name: 'Software',
    value: 'software',
    icon: <MdOutlineIntegrationInstructions />,
    content: (
      <>
        Discover <span className='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
        curated just for you. Start exploring and let your curiosity lead the way!
      </>
    ),
    skills: [
        {
            name: 'Power BI',
            icon: <img src={PowerBILogo} className={iconSize} alt="Power BI Logo" />
        },
        {
            name: 'Microsoft Office Excel',
            icon: <img src={ExcelLogo} className={iconSize} alt="Power BI Logo" />
        },
        {
            name: 'GitHub',
            icon: <div className={iconSize + " flex items-center justify-center"}>
                    <FaGithub className="w-full h-full" />
                </div>
        },
        {
            name: 'Microsoft Power Query',
            icon: <img src={MicrosoftPQLogo} className={iconSize} alt="SQL Logo" />
        },
        {
          name: 'SQL',
            icon: <img src={SQLLogo} className={iconSize} alt="SQL Logo" />
        },
        {
          name: 'DAX',
            icon: <img src={DaxLogo} className={iconSize} alt="DAX Logo" />
        },
    ]
  },
  {
    name: 'Expertise',
    value: 'expertise',
    icon: <MdWorkOutline />,
    content: (
      <>
        All your <span className='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.
      </>
    ),
    skills: [
        {
            name: 'Arabic',
            icon: <img src={PowerBILogo} className={iconSize} alt="Power BI Logo" />
        },
        {
            name: 'English',
            icon: <img src={PowerBILogo} className={iconSize} alt="Power BI Logo" />
        }
    ]
  },
  {
    name: "Languages",
    value: 'languages',
    icon: <MdLanguage />,
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    ),
    skills: [
        {
            name: 'Arabic',
            icon: <img src={ArabicLanguageLogo} className={`${iconSize} rounded-lg`} alt="Saudi-Arabia Flag" />
        },
        {
            name: 'English',
            icon: <img src={EnglishLanguageLogo} className={`${iconSize} rounded-lg`} alt="United-Kingdom Flag" />
        }
    ]
  }
]

export default function Skills() {
    return <section id="skills">
        <HeaderSection text="Skills" />
        <Tabs
        defaultValue='software'
        className="mt-5 flex w-full">
            <TabsList className="self-center md:self-start">
                {tabs.map(tab => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.name}
                        {tab.icon}
                    </TabsTrigger>
                ))}
            </TabsList>

            {/* {tabs.map(tab => (
                <TabsContent key={tab.value} value={tab.value} className="mt-3 flex gap-2">
                    {tab.skills?.map((skill, index) => {
                        return <Badge key={index} className="flex items-center gap-2 py-2 px-5" variant="outline">
                                {skill.icon}
                                <p>{skill.name}</p>
                            </Badge>
                    })}
                </TabsContent>
            ))} */}
        </Tabs>
    </section>
}

// {tabs.map((tab, index) => (
//     // self-center md:self-end
//   <TabsContent
//     key={tab.value}
//     value={tab.value}
//     className="mt-3 flex flex-wrap gap-4"
//   >
//     {tab.skills?.map((skill) => (
//       <Badge
//         key={index}
//         className="flex items-center justify-center gap-2 py-3 px-6 w-[calc(25%-0.75rem)]"
//         variant="outline"
//       >
//         {skill.icon}
//         <span>{skill.name}</span>
//       </Badge>
//     ))}
//   </TabsContent>
// ))}
