import { Trophy, Zap, Code2, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Code2, text: "Strong DSA and problem-solving skills" },
  { icon: Trophy, text: "Active on LeetCode & HackerRank" },
  { icon: Zap, text: "Quick learner and highly adaptable" },
  { icon: Sparkles, text: "Focus on clean, maintainable code" },
];

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <div className="reveal" data-delay="0">
          <p className="section-label">Strengths</p>
          <h2 className="section-title">What Sets Me Apart</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {items.map((item, i) => (
            <div
              key={item.text}
              className="reveal flex items-center gap-4 glass-card p-5 transition-all duration-300 hover:border-primary/30"
              data-delay={String(100 + i * 80)}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-primary" />
              </div>
              <p className="text-sm text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
