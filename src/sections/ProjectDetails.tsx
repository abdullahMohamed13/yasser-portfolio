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

export default function ProjectDetails() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="flex flex-col items-center gap-3 [&>*:not(button)]:text-4xl">
      <p>This project is not available any more.</p>
      <p>Sorry about that :)</p>
      <Button onClick={() => navigate('/')}>Return Home</Button>
    </div>;

  return (
    <main className="flex flex-col gap-4 md:gap-6">
      <div className="mb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="cursor-pointer" onClick={() => navigate('/')}>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>#projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h2 className="text-4xl">{project.name}</h2>
        <p className="text-muted-foreground">{project.detailedDescription}</p>
      </div>

      <Separator />

      <div>
        <HeaderSection text="KPIs at a Glance" />
        <img className="rounded-2xl my-3" src={project.KPIs?.img} alt="KPIs illustration" />
        <KPITable items={project.KPIs?.items ?? []}/>
      </div>

      <Separator />

      <div>
        <HeaderSection text="Tools & Skills Demonstrated" />
        <ul className="list-disc flex flex-col gap-2 mt-4">
          {project.skillsDemonstrated?.map((skill, index) => {
            return <li key={index}>
              <span className="font-bold bg-muted px-2 py-1 rounded-md">{skill.key}:</span>
              <> </>{skill.value}
            </li>
          })}
        </ul>
      </div>
    </main>
  );
}
