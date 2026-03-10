import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects. 
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <a
            href="mailto:tareq.anam@example.com"
            className="flex items-center gap-4 p-6 border-2 border-border rounded-lg hover:shadow-lg transition-all hover:border-[#3776ab]"
          >
            <div className="p-3 bg-gradient-to-br from-[#3776ab] to-blue-600 rounded-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="text-sm text-muted-foreground">tareq.anam@example.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/tareqanam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 border-2 border-border rounded-lg hover:shadow-lg transition-all hover:border-[#3776ab]"
          >
            <div className="p-3 bg-gradient-to-br from-[#3776ab] to-blue-600 rounded-lg">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/tareqanam</p>
            </div>
          </a>

          <a
            href="https://github.com/tareqanam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 border-2 border-border rounded-lg hover:shadow-lg transition-all hover:border-[#10b981]"
          >
            <div className="p-3 bg-gradient-to-br from-[#10b981] to-emerald-600 rounded-lg">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">GitHub</p>
              <p className="text-sm text-muted-foreground">github.com/tareqanam</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 border-2 border-border rounded-lg">
            <div className="p-3 bg-gradient-to-br from-[#10b981] to-emerald-600 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">Location</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tareq Anam. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Optimized for GitHub Pages • Open Source
          </p>
        </motion.div>
      </div>
    </section>
  );
}
