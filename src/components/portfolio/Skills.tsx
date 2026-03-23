import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 75 },
      { name: "C++", level: 80 },
      { name: "Python", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 78 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "LeetCode / HackerRank", level: 75 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", level: 82 },
      { name: "OOP & OS", level: 78 },
      { name: "DBMS & OOSD", level: 75 },
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <div className="reveal" data-delay="0">
          <p className="section-label">Skills</p>
          <h2 className="section-title">My Tech Toolkit</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-4">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className="reveal glass-card p-6"
              data-delay={String(100 + ci * 80)}
            >
              <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">{s.name}</span>
                      <span className="text-primary font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary animate-skill-fill"
                        style={{ "--skill-level": `${s.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
