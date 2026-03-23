import { Globe, Layout, Palette, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    items: ["Responsive websites", "Single Page Applications", "Performance optimization", "Cross-browser compatibility"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    items: ["React-based UI", "Component architecture", "API integration", "State management"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    items: ["Intuitive interfaces", "Wireframing & layouts", "Accessibility-focused", "UI improvement"],
  },
  {
    icon: GitBranch,
    title: "Tools & Version Control",
    items: ["Git & GitHub workflows", "Debugging", "Code optimization", "Documentation"],
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container">
        <div className="reveal" data-delay="0">
          <p className="section-label">Services</p>
          <h2 className="section-title">What I Can Do</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              data-delay={String(100 + i * 80)}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
