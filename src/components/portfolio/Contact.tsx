import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socials = [
  { icon: Mail, label: "mehakmishra495@gmail.com", href: "mailto:mehakmishra495@gmail.com" },
  { icon: Phone, label: "8839748504", href: "tel:8839748504" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mehak-mishra-9161432b3" },
  { icon: Github, label: "GitHub", href: "https://github.com/Mehak-456" },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <div className="reveal" data-delay="0">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-4">
          {/* Info */}
          <div className="reveal space-y-4" data-delay="100">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Have a project in mind or just want to connect? Feel free to reach out — I'd love to hear from you.
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <s.icon size={16} />
                </div>
                {s.label}
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            className="reveal glass-card p-6 space-y-4"
            data-delay="200"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 3000);
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              {submitted ? "Message Sent ✓" : (
                <>Send Message <Send size={14} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
