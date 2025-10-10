import { useParams, useNavigate, useLocation } from "react-router-dom";
// store
import { projects } from "@/store/projects";
// shadcn Components
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// Custom Components
import HeaderSection from "@/components/HeaderSection";
import { KPITable } from "@/components/kpi-table";

// icons
import { MdOutlineInsights } from "react-icons/md"
import { handleNavigation } from "@/utils/handleNavigation";
import { GoDotFill } from "react-icons/go";

export default function ProjectDetails() {
  const navigate = useNavigate()
  const location = useLocation()
  const { name } = useParams<{ name: string }>();
  const project = projects.find((p) => p.name === (name));

  if (!project) return <div className="flex flex-col items-center gap-3 [&>*:not(button)]:text-4xl">
      <p>This project is not available any more.</p>
      <p>Sorry about that :)</p>
      <Button onClick={() => navigate('/')}>Return Home</Button>
    </div>;

return (
    <main className="w-full flex flex-col gap-4 md:gap-6">
      <Breadcrumb className="mb-2">
        <BreadcrumbList>
          <BreadcrumbItem className="cursor-pointer" onClick={() => navigate('/')}>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="cursor-pointer" onClick={() => handleNavigation('#projects', navigate, location)}>
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
        <div className="flex items-center sm:items-start gap-2 justify-center">
            {project.imgSrc.map((src, index) => {
              return <Dialog key={index}>
                        <DialogTrigger>
                            <img 
                                src={src} 
                                className="rounded-md h-100 cursor-pointer mt-3"
                                title="Show Picture" 
                                alt="Project Image" 
                            />
                        </DialogTrigger>
                        <DialogContent>
                          <img 
                              src={src} 
                              className="md:max-w-4xl rounded-md"
                              title="Show Picture" 
                              alt="Project Image" 
                          />
                        </DialogContent>
                      </Dialog>
            })}
        </div>
        <p className="mt-3 text:base md:text-lg">{project.detailedDescription}</p>
      </div>
      
      {/* KPIs */}
      {project.KPIs && (
        <>
          <Separator />
          <div>
            <HeaderSection text="KPIs at a Glance" />
            <div className=" flex justify-center md:justify-start items-center md:items-start flex-col">
              <img className="rounded-2xl" src={project.KPIs?.img} alt="KPIs illustration" />
              <KPITable className="my-2 md:my-3" items={project.KPIs?.items ?? []}/>
            </div>
          </div>
        </>
      )}

      <Separator /> 

      <div>
        <HeaderSection text="Insights breakdown" />
        {project.content?.map((block, blockIndex) => (
          // All projects card
          <div key={blockIndex} className="flex flex-col gap-2 md:gap-4 mt-4">
            {block.sections.map((section, sectionIndex) => (
              // Single project card
              <div
                key={sectionIndex}
                className="w-full flex flex-col gap-6 rounded-2xl border p-6 shadow-sm bg-card transition hover:shadow-md"
              >
                {/* Card Header */}
                {section.header && (
                  <Badge variant='destructive' className="self-center md:self-start text-lg">{section.header}</Badge>
                )}

                {/* Text Content */}
                {section.details.map((detail, index) => {
                  return <div key={index} className="flex-1 gap-2 flex flex-col justify-center">
                      {detail.title && (
                        <h3 className="text-xl text-primary font-semibold flex items-center gap-2">
                            {detail.title}
                        </h3>
                      )}
                    <p className="leading-relaxed">
                      {typeof(detail.text) === 'string' ?
                        (
                          <>
                            <span className="font-bold text-2xl mr-1.5">-</span>{detail.text}
                          </>
                        ) :
                        (
                          <>
                          {detail.text?.map((phrase, index) => {
                            return <div key={index} className="flex items-center gap-1">
                              <GoDotFill /> {phrase}
                            </div>
                          })}
                        </>
                      )}
                    </p>
                    {/* Decision Section */}
                    {detail.decision && (
                      <div className="flex flex-col md:flex-row items-center gap-2">
                        <Badge className="text-base" variant='secondary'><MdOutlineInsights className="text-primary w-5 h-5" /> Decision:</Badge>
                        {' '}
                        <span className="text-foreground/70">{detail.decision}</span>
                      </div>
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
                          className="rounded-xl cursor-pointer w-full h-auto object-contain"
                          alt="Dashboard Img"
                          title="Click to maximize"
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
      
      <Separator />
      {/* Skills */}
      <div>
        <HeaderSection text="Tools & Skills Demonstrated" />
        <ul className="ml-4 list-disc flex flex-col gap-2 mt-4">
          {project.skillsDemonstrated?.map((skill, index) => (
            <li key={index}>
              <span className="font-bold bg-muted px-2 py-1 rounded-md text-foreground">{skill.key}:</span>{" "}
              <span className="text-foreground/70">{skill.value}</span>
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
