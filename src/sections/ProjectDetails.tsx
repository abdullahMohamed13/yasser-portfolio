import { useParams } from "react-router-dom";
import { projects } from "@/store/projects";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}
