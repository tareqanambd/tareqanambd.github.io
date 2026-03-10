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
              I'm a Senior Python Software Developer with extensive experience in building and scaling 
              microservices architectures for the fintech and banking industry. With a strong focus on 
              backend systems, I specialize in designing robust APIs, implementing asynchronous processing 
              pipelines, and optimizing database performance for high-throughput applications.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              My expertise spans across the entire backend stack—from developing RESTful services with 
              Django, FastAPI, and Flask, to implementing message queuing systems with RabbitMQ and Celery, 
              to deploying containerized applications with Docker and CI/CD pipelines. I'm passionate about 
              DevOps practices and believe in building systems that are not only functional but also 
              observable, maintainable, and scalable.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Throughout my career, I've delivered critical solutions for banking platforms, including 
              customer search systems, merchant transaction portals, and global search modules that serve 
              millions of users. I'm driven by solving complex technical challenges and continuously 
              improving system architecture for performance and reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
