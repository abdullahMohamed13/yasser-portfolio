// Custom components
import HeaderSection from "@/components/HeaderSection";
// shadcn components
import {
  Tabs,
  TabsContent,
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
import { FaGithub } from "react-icons/fa";
import { MdOutlineIntegrationInstructions, MdWorkOutline, MdLanguage } from "react-icons/md";
import { Badge } from "@/components/ui/badge";

const iconSize = 'h-5 w-5 md:h-9 md:w-9'
const tabs = [
  {
    name: 'Software',
    value: 'software',
    icon: <MdOutlineIntegrationInstructions />,
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
        className="mt-5 flex">
            <TabsList className="self-center md:self-start">
                {tabs.map(tab => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.name}
                        {tab.icon}
                    </TabsTrigger>
                ))}
            </TabsList>

          {tabs.map(tab => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3"
            >
              {tab.skills?.map((skill, index) => (
                <Badge
                  key={index}
                  className="flex justify-start gap-2 py-3 px-2 md:px-4 w-full h-full"
                  variant="secondary"
                >
                  {skill.icon}
                  <p className="text-xs md:text-sm">{skill.name}</p>
                </Badge>
              ))}
            </TabsContent>
          ))}

        </Tabs>
    </section>
}
