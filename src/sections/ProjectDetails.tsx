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
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/ui/dialog";
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
      
      {/* KPIs */}
      {project.KPIs && (
        <>
          <Separator />
          <div>
            <HeaderSection text="KPIs at a Glance" />
            <KPITable className="my-2 md:my-3" items={project.KPIs?.items ?? []}/>
            <img className="rounded-2xl" src={project.KPIs?.img} alt="KPIs illustration" />
          </div>
        </>
      )}

      <Separator />

      <div>
        <HeaderSection text="Project Break Down" />
        <div className="flex flex-col gap-8">
          {project.content?.map((block, blockIndex) => (
            <div key={blockIndex} className="flex flex-col gap-2 md:gap-4 mt-4">
              {block.sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`flex flex-col gap-6 rounded-2xl border p-6 shadow-sm bg-card transition hover:shadow-md ${
                    sectionIndex % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Content */}
                  {section.details.map((detail, index) => {
                    return <div key={index} className="flex-1 gap-2 flex flex-col justify-center">
                      <h3 className="text-xl text-primary font-semibold flex items-center gap-2 mb-3">
                        <MdOutlineInsights className="text-primary w-5 h-5" />
                        {detail.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {detail.text}
                      </p>
                      {detail.decision && (
                        <p className="text-muted-foreground leading-relaxed">
                          <span className="text-foreground">Decision: </span>{detail.decision}
                        </p>
                      )}
                    </div>
                  })}
                  
                  {/* Image */}
                  {section.img && (
                    // flex-1
                    <div className="flex justify-center items-center">
                      <Dialog>
                        <DialogTrigger>
                          <img
                            src={section.img}
                            className="rounded-xl cursor-pointer w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain bg-muted p-2"
                            alt="Dashboard Img"
                            aria-label="Dashboard Img"
                          />
                        </DialogTrigger>
                        <DialogContent>
                          <img
                            src={section.img}
                            alt="Dashboard Img"
                            aria-label="Dashboard Img"
                          />
                        </DialogContent>
                    </Dialog>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      {/* Skills */}
      <div>
        <HeaderSection text="Tools & Skills Demonstrated" />
        <ul className="ml-4 list-disc flex flex-col gap-2 mt-4">
          {project.skillsDemonstrated?.map((skill, index) => (
            <li key={index}>
              <span className="font-bold bg-muted px-2 py-1 rounded-md text-foreground">{skill.key}:</span>{" "}
              <span className="text-muted-foreground">{skill.value}</span>
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
              className="flex text-white items-center gap-2 justify-center"
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
