import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Github, Linkedin, Instagram, Mail, Phone, Download, ArrowRight,
  GraduationCap, Code2, Brain, Lightbulb, Sparkles, Rocket,
  MessageSquare, Cpu, Send, MapPin, CheckCircle, AlertCircle,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "B.Tech IT Student",
  "Aspiring IT Professional",
  "Problem Solver",
  "Lifelong Learner",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="text-gradient font-semibold">
      {text}<span className="caret text-primary">|</span>
    </span>
  );
}

const skills = [
  { name: "Natural Language Processing", level: 75, icon: MessageSquare },
  { name: "Problem Solving", level: 88, icon: Lightbulb },
  { name: "Coding & Programming", level: 82, icon: Code2 },
  { name: "Logical Reasoning", level: 90, icon: Brain },
  { name: "Information Analysis", level: 78, icon: Sparkles },
  { name: "AI Assistance Concepts", level: 72, icon: Cpu },
];

const navLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled ? "glass py-3" : "py-5"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-xl">
            <span className="text-gradient">Dajashni</span>
            <span className="text-primary">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition glow"
          >
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for internships
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-gradient">Dajashni R</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 h-8">
              <Typewriter />
            </p>
            <p className="text-base text-muted-foreground/90 mt-6 max-w-lg leading-relaxed">
              A passionate 2nd-year B.Tech Information Technology student at R.M.D Engineering College, Chennai — driven by curiosity, code, and the craft of building meaningful digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition glow">
                View Portfolio <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold hover:bg-white/10 transition">
                Contact Me
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:bg-white/5 transition">
                <Download className="h-4 w-4" /> Resume
              </button>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl animate-pulse-glow" />
            </div>
            <div className="relative h-80 w-80 md:h-96 md:w-96 rounded-full p-1 bg-gradient-to-br from-primary to-accent animate-pulse-glow">
              <div className="h-full w-full rounded-full overflow-hidden bg-background">
                <img
                  src={profileImg}
                  alt="Dajashni R portrait"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 right-8 glass rounded-2xl px-4 py-3 text-sm animate-float">
              <div className="text-primary font-bold text-lg">2nd Year</div>
              <div className="text-xs text-muted-foreground">B.Tech IT</div>
            </div>
            <div className="absolute bottom-4 -left-2 glass rounded-2xl px-4 py-3 text-sm animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-accent font-bold text-lg">∞</div>
              <div className="text-xs text-muted-foreground">Curiosity</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About Me" title="Designing solutions, not just code">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="glass rounded-3xl p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm <span className="text-foreground font-semibold">Dajashni R</span>, currently pursuing a B.Tech in Information Technology at R.M.D Engineering College, Chennai. I love exploring how technology bridges ideas to reality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My interests span <span className="text-primary">natural language processing</span>, <span className="text-accent">reasoning systems</span>, and software development. I focus on building strong fundamentals while staying curious about emerging tech that shapes our future.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Stat value="2nd" label="Year" />
              <Stat value="6+" label="Core Skills" />
              <Stat value="∞" label="Ideas" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2, t: "Coding", d: "Clean, logical, intentional" },
              { icon: Brain, t: "Reasoning", d: "Structured problem solving" },
              { icon: Rocket, t: "Growth", d: "Always learning, always shipping" },
              { icon: Sparkles, t: "Innovation", d: "Curious about what's next" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-5 hover:border-primary/40 transition">
                <c.icon className="h-7 w-7 text-primary mb-3" />
                <div className="font-semibold">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="My academic journey">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {[
            {
              title: "B.Tech — Information Technology",
              place: "R.M.D Engineering College, Chennai",
              date: "2024 — Present · 2nd Year",
              desc: "Building strong fundamentals in IT, programming, and emerging technologies.",
            },
            {
              title: "Higher Secondary Education",
              place: "Completed",
              date: "Foundation Years",
              desc: "Strong base in mathematics, science, and analytical thinking.",
            },
          ].map((e) => (
            <div key={e.title} className="relative pl-16 pb-10">
              <div className="absolute left-3 top-1 h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
                <GraduationCap className="h-3.5 w-3.5 text-background" />
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-xs text-primary font-semibold mb-1">{e.date}</div>
                <div className="text-lg font-semibold">{e.title}</div>
                <div className="text-sm text-muted-foreground">{e.place}</div>
                <p className="text-sm text-muted-foreground/90 mt-3">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="What I'm building expertise in">
        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((s) => (
            <div key={s.name} className="glass rounded-2xl p-6 hover:border-primary/40 transition group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-medium">{s.name}</div>
                </div>
                <div className="text-sm text-muted-foreground">{s.level}%</div>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="Currently learning, growing, exploring">
        <div className="glass rounded-3xl p-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6">
            <Rocket className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Focused on academic learning & skill development</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm enthusiastic about internships, collaborations, and real-world opportunities where I can apply what I've learned and grow alongside experienced teams.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-primary hover:underline">
            Let's connect <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Upcoming work">
        <div className="grid md:grid-cols-3 gap-5">
          {["AI Study Companion", "NLP Mini Toolkit", "Reasoning Playground"].map((t, i) => (
            <div key={t} className="glass rounded-2xl p-6 group hover:border-accent/40 transition">
              <div className="h-32 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-transparent border border-border flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary/60 group-hover:text-primary transition" />
              </div>
              <div className="text-xs text-accent font-semibold mb-1">COMING SOON · 0{i + 1}</div>
              <div className="text-lg font-semibold mb-2">{t}</div>
              <p className="text-sm text-muted-foreground">
                A future project to be added as my learning journey progresses.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="Services" title="Open to opportunities">
        <div className="glass rounded-3xl p-10 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-semibold">open to learning, collaborations, and future opportunities</span> in technology and development — whether it's a student project, an internship, or simply trading ideas with curious people.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let's build something together">
        <ContactSection />
      </Section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Dajashni R · All rights reserved</div>
          <div className="flex gap-4">
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-primary transition" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_wmhmcrj",
        "template_r71z7zr",
        formRef.current,
        "3uXmDNAB-LfMxvge-"
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <ContactRow icon={Mail} label="Email" value="dajashni@example.com" />
        <ContactRow icon={Phone} label="Phone" value="+91 00000 00000" />
        <ContactRow icon={MapPin} label="Location" value="Chennai, India" />
        <div className="flex gap-3 pt-4">
          {[Linkedin, Github, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition"
              aria-label="social"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-3xl p-6 space-y-4">
        <input
          name="from_name"
          placeholder="Your name"
          required
          className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition resize-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition glow disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message <Send className="h-4 w-4" />
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 rounded-xl px-4 py-2">
            <CheckCircle className="h-4 w-4" />
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-2">
            <AlertCircle className="h-4 w-4" />
            Failed to send. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">{eyebrow}</div>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4 flex items-center gap-4">
      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
    />
  );
}
