import { ArrowDown, Send, Download } from "lucide-react";
import { useEffect, useState } from "react";

function useTypingEffect(words: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const stats = [
{ value: "4+", label: "Projects Built" },
{ value: "78%", label: "Current CGPA" },
{ value: "3rd", label: "Year B.Tech" }];


const roles = ["Frontend Developer", "AI & ML Student", "Problem Solver", "Web Designer"];

export default function Hero() {
  const typedText = useTypingEffect(roles, 80, 1800);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }} />
        
        <div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(172 80% 60%), transparent 70%)" }} />
        
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }} />
        
      </div>

      <div className="container relative z-10 max-w-3xl mx-auto text-center">

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 animate-fade-up"
          style={{ animationDelay: "0.08s", lineHeight: 1.05 }}>
          
          Mehak Mishra 
        </h1>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-5 animate-fade-up"
          style={{ animationDelay: "0.15s", lineHeight: 1.05 }}>
          
          ​
        </h1>

        <div className="h-8 mb-6 animate-fade-up" style={{ animationDelay: "0.22s" }}>
          <span className="font-mono text-base text-muted-foreground">{">"} </span>
          <span className="font-mono text-base text-primary">{typedText}</span>
          <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 align-middle animate-blink" />
        </div>

        <p
          className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s" }}>
          
          Motivated 3rd-year B.Tech student with a strong foundation in programming
          and problem-solving. Building at the intersection of AI, machine learning,
          and modern web technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: "0.38s" }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
            
            View Projects
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary active:scale-[0.97] transition-all duration-200">
            
            Contact Me
            <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-muted-foreground font-medium text-sm hover:text-foreground active:scale-[0.97] transition-all duration-200">
            
            <Download size={15} />
            Resume
          </a>
        </div>

        <div className="flex justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.46s" }}>
          {stats.map((s, i) =>
          <div key={s.label} className={`${i > 0 ? "border-l border-border pl-8" : ""}`}>
              <p className="text-2xl font-bold text-foreground tabular-nums">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}