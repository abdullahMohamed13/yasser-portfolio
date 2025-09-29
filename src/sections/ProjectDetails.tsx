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
import { MdOutlineInsights } from 'react-icons/md'
// import { MdOutlineDashboard } from 'react-icons/md'
// import { HiOutlineLightBulb } from 'react-icons/hi'
// import { HiOutlineDocumentText } from 'react-icons/hi'

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
        <div className="flex flex-col gap-8">
          {project.content?.map((block, blockIndex) => (
            <div key={blockIndex} className="flex flex-col gap-2 md:gap-4 mt-4">
              {block.sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`flex flex-col md:flex-row gap-6 rounded-2xl border p-6 shadow-sm bg-card transition hover:shadow-md ${
                    sectionIndex % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {section.title && (
                      <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                        <MdOutlineInsights className="text-primary w-5 h-5" />
                        {section.title}
                      </h3>
                    )}
                    {section.text && (
                      <p className="text-muted-foreground leading-relaxed">
                        {section.text}
                      </p>
                    )}
                  </div>

                  {/* Image */}
                  {section.img && (
                    <div className="flex-1 flex justify-center items-center">
                      <img
                        src={section.img}
                        className="rounded-xl w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain bg-muted p-2"
                        alt={section.title || "Dashboard Img"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Separator />
      
      {/* KPIs */}
      {project.KPIs && (
        <>
          <div>
            <HeaderSection text="KPIs at a Glance" />
            <img className="rounded-2xl my-3" src={project.KPIs?.img} alt="KPIs illustration" />
            <KPITable items={project.KPIs?.items ?? []}/>
          </div>
        </>
      )}

      {/* Skills */}
      <div>
        <HeaderSection text="Tools & Skills Demonstrated" />
        <ul className="ml-4 list-disc flex flex-col gap-2 mt-4">
          {project.skillsDemonstrated?.map((skill, index) => (
            <li key={index} className="text-muted-foreground">
              <span className="font-bold bg-muted px-2 py-1 rounded-md text-foreground">{skill.key}:</span>{" "}
              {skill.value}
            </li>
          ))}
        </ul>
      </div>

      {/* Business Value */}
      {project.businessValue && (
        <>
          <Separator />
          <div>
            <HeaderSection text="Business Value" />
            <ul className="ml-4 list-disc">
              {project.businessValue.map((bus, index) => {
                return <li key={index} className="mt-2">
                  {bus}
                </li>
              })}
            </ul>
          </div>
        </>
      )}

      {/* Conclusion (if exist) */}
      {project.conclusion && (
        <>
          <Separator />
          <div>
            <HeaderSection text="Conclusion" />
            <p className="mt-2">{project.conclusion}</p>
          </div>
        </>
      )}

      {/* Links */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mt-6">
        {project.links.map((link, index) => (
          <Button
            key={index}
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center"
            >
              {link.icon}
              {link.name}
            </a>
          </Button>
        ))}
      </div>

    </main>
  );
}
