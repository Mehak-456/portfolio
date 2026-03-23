import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2025 Mehak Mishra. Built with passion.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Mehak-456" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mehak-mishra-9161432b3" },
            { icon: Mail, href: "mailto:mehakmishra495@gmail.com" },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
