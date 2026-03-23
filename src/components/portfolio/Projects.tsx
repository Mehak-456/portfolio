import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "AgriConnect",
    description: "Platform connecting farmers and consumers directly, eliminating middlemen to increase farmer profitability.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Waste Management System",
    description: "Smart solution with gamification and geo-tagging enabling citizen-worker collaboration for cleaner cities.",
    tech: ["React Native", "Flutter", "Node.js", "PostgreSQL", "PyTorch"],
  },
  {
    title: "AI Sanitization Monitor",
    description: "Computer vision-based monitoring system providing real-time feedback on cleaning and sanitization processes.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Splitwise Clone",
    description: "Expense-sharing web application that tracks debts among groups and minimizes the number of transactions needed.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <div className="reveal" data-delay="0">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              data-delay={String(100 + i * 100)}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {p.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
