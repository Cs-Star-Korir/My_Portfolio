export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {project.name}
      </h3>

      <p className="text-gray-600 mb-4">{project.description}</p>

      
        <a href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-gray-900 hover:underline"
      >
        {project.buttonLabel} →
      </a>
    </div>
  );
}