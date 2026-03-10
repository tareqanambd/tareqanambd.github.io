import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              Experienced Software Developer with a strong background in Python, Flask, FastAPI, Celery,
              RabbitMQ, and Docker, specializing in building scalable microservices and robust APIs for
              the banking and fintech industry. Currently serving as Associate Manager &amp; Sr Software
              Developer at The City Bank PLC, one of Bangladesh's leading private commercial banks.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              I am passionate about streamlining development and deployment processes and am focused on
              deepening expertise in DevOps practices, Kubernetes, and CI/CD pipelines. My work spans
              critical banking systems — from Customer 360 Search and Government Securities platforms to
              RPA automation services and AI-powered customer assistants.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Eager to leverage AI, ML, and data analytics to drive innovation and deliver high-impact
              solutions. I have a published research paper in AI-based cattle identification and hold
              multiple City Bank recognition awards for pioneering engineering contributions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
