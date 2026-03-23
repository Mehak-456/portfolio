import { GraduationCap, BookOpen, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  { label: "B.Tech (AI & ML)", detail: "CGPA ~78% (till 5th sem)", icon: GraduationCap },
  { label: "Higher Secondary", detail: "80.2%", icon: BookOpen },
  { label: "High School", detail: "82.2%", icon: BookOpen },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container">
        <div className="reveal" data-delay="0">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Designing Solutions,<br />
            Not Just Visuals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-4">
          <div className="reveal" data-delay="100">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a 3rd-year B.Tech student specializing in Artificial Intelligence and Machine Learning
              at G.L. Bajaj Institute of Technology and Management, Greater Noida — affiliated with
              Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong interest in AI, ML, and Web Development, I'm passionate about building
              solutions that combine clean code with thoughtful design. I thrive on continuous learning
              and adapting to new challenges.
            </p>
            <div className="flex items-center gap-3 text-sm text-primary">
              <Lightbulb size={16} />
              <span>Always learning, always adapting</span>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((e, i) => (
              <div
                key={e.label}
                className="reveal glass-card p-5 flex items-center gap-4 transition-shadow duration-300"
                data-delay={String(150 + i * 80)}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <e.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{e.label}</p>
                  <p className="text-xs text-muted-foreground">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
