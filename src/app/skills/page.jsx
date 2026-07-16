const hardSkillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Data & ML",
    skills: ["Pandas", "scikit-learn", "Data Analysis"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Cross Cultural Communication",
  "Public Speaking",
];

export default function Skills() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-10">Skills</h1>

      {/* Hard skills — grouped by category */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Hard Skills
        </h2>
        <div className="flex flex-col gap-6">
          {hardSkillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-warmgray uppercase tracking-wide mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-sage/10 text-sage rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft skills — flat, visually separated */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Soft Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-clay/10 text-clay rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}