import { motion } from "motion/react";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#3776ab] to-[#10b981] bg-clip-text text-transparent">
            Tareq Anam
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Associate Manager · Sr Software Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto"
        >
          Python · Microservices · Banking Platforms · DevOps · AI/ML
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            className="gap-2 bg-[#3776ab] hover:bg-[#3776ab]/90"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() =>
              window.open(
                "https://github.com/tareqanambd",
                "_blank",
              )
            }
          >
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tareq-anam-8a523965",
                "_blank",
              )
            }
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => (window.location.href = "mailto:tareqanam@outlook.com")}
          >
            <Mail className="w-5 h-5" />
            Email
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="inline-block animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}