export default function ProjectCard({ project }) {
  return (
    <div className="border border-warmgray/20 rounded-lg p-6 hover:shadow-md hover:border-clay/40 transition-all">
      <h3 className="text-lg font-semibold text-foreground mb-3">{project.name}</h3>
      <p className="text-warmgray mb-4">{project.description}</p>
      
       <a href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-clay hover:underline"
      >
        {project.buttonLabel} →
      </a>
    </div>
  );
}