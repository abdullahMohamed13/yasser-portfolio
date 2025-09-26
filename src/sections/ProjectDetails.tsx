import { useParams } from "react-router-dom";
import { projects } from "@/store/projects";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { KPITable } from "@/components/kpi-table";
import { Separator } from "@/components/ui/separator";
import HeaderSection from "@/components/HeaderSection";
import { FaArrowRight} from 'react-icons/fa'

export default function ProjectDetails() {
  const navigate = useNavigate()
  const { name } = useParams<{ name: string }>();
  const project = projects.find((p) => p.name === (name));

  if (!project) return <div className="flex flex-col items-center gap-3 [&>*:not(button)]:text-4xl">
      <p>This project is not available any more.</p>
      <p>Sorry about that :)</p>
      <Button onClick={() => navigate('/')}>Return Home</Button>
    </div>;

  return (
    <main className="flex flex-col gap-4 md:gap-6">
      <Breadcrumb className="mb-2">
        <BreadcrumbList>
          <BreadcrumbItem className="cursor-pointer" onClick={() => navigate('/')}>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>#Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <HeaderSection text="Description" />
        <p className="mt-2 text:base md:text-lg">{project.detailedDescription}</p>
      </div>

      <Separator />

      <div>
        <HeaderSection text="Project Break Down" />
        <div className="flex flex-col gap-5">
          {project.content?.map((block, blockIndex) => (
            <div key={blockIndex} className="flex flex-col gap-6 mt-6">
              {block.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col">
                  {section.title && <h3 className="text-xl flex items-center gap-2"><FaArrowRight color="var(--color-primary)"/> {section.title}</h3>}
                  {section.text && <p className="text-muted-foreground">{section.text}</p>}
                  {section.img && (
                    <>
                      <img
                        src={section.img}
                        className="rounded-md my-3 w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                        alt={section.title || "Dashboard Img"}
                      />
                      <Separator />
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {project.KPIs && (
        <>
          <div>
            <HeaderSection text="KPIs at a Glance" />
            <img className="rounded-2xl my-3" src={project.KPIs?.img} alt="KPIs illustration" />
            <KPITable items={project.KPIs?.items ?? []}/>
          </div>
        </>
      )}

      <div>
        <HeaderSection text="Tools & Skills Demonstrated" />
        <ul className="ml-3 md:ml-0 list-disc flex flex-col gap-2 mt-4">
          {project.skillsDemonstrated?.map((skill, index) => {
            return <li key={index}>
              <span className="font-bold bg-muted px-2 py-1 rounded-md">{skill.key}:</span>
              <> </>{skill.value}
            </li>
          })}
        </ul>
      </div>

      {project.businessValue && (
        <>
          <Separator />
          <div>
            <HeaderSection text="Business Value" />
            <ul className="ml-3 md:ml-0 list-disc">
              {project.businessValue.map((bus, index) => {
                return <li key={index} className="mt-2">
                  {bus}
                </li>
              })}
            </ul>
          </div>
        </>
      )}

      {project.conclusion && (
        <>
          <Separator />
          <div>
            <HeaderSection text="Conclusion" />
            <p className="mt-2">{project.conclusion}</p>
          </div>
        </>
      )}

      <div className="flex justify-center gap-2 flex-col items-center">
        {project.links.map((link, index) => {
          return <Button key={index} className="w-[55%] md:w-[40%]">
            <a href={link.href} className="text-white flex items-center gap-1 justify-center">
              {link.icon}
              {link.name}
            </a>
          </Button>
        })}
      </div>

    </main>
  );
}
