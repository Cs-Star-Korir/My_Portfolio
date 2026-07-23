const hardSkillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Intermediate" },
      { name: "SQL", level: "Beginner" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Beginner" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    category: "Data & ML",
    skills: [
      { name: "Pandas", level: "Intermediate" },
      { name: "scikit-learn", level: "Beginner" },
      { name: "Data Analysis", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel", level: "Beginner" },
    ],
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
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Heading */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground">
          Skills
        </h1>

        <div className="w-20 h-1 bg-clay rounded-full mx-auto mt-4 mb-8"></div>

        <p className="max-w-2xl mx-auto text-lg leading-8 text-warmgray">
          These are the technologies, tools, and professional skills I'm
          continuously developing through coursework, projects, hackathons,
          and real-world experiences.
        </p>
      </section>

      {/* Hard Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Hard Skills
        </h2>

        <div className="grid gap-6">
          {hardSkillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-warmgray mb-4">
                {group.category}
              </h3>

              <div className="grid gap-3">
                {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 transition-all duration-300 hover:bg-sage hover:text-background hover:border-sage hover:shadow-md cursor-default"
                >
                  <span className="font-medium transition-colors duration-300 group-hover:text-background">
                    {skill.name}
                  </span>

                  <span
                    className={`text-xs font-medium rounded-full px-3 py-1 transition-all duration-300 ${
                      skill.level === "Advanced"
                        ? "bg-green-500/10 text-green-600 group-hover:bg-white/20 group-hover:text-white"
                        : skill.level === "Intermediate"
                        ? "bg-clay/10 text-clay group-hover:bg-white/20 group-hover:text-white"
                        : "bg-warmgray/10 text-warmgray group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Soft Skills
        </h2>

        <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm bg-clay/10 text-clay transition-all duration-300 hover:bg-clay hover:text-background hover:-translate-y-1 hover:shadow-md cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}