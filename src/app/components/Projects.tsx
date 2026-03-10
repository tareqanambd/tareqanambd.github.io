import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Banking Microservices Platform',
    description:
      'Architected a cloud-native microservices ecosystem for core banking operations, supporting account management, transactions, and real-time notifications for 2M+ active users.',
    techStack: ['Python', 'Django', 'FastAPI', 'Docker', 'RabbitMQ', 'Redis', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Customer 360 Search System',
    description:
      'Designed and implemented an enterprise-grade search platform using OpenSearch, enabling instant customer data retrieval across multiple data sources with advanced filtering capabilities.',
    techStack: ['Python', 'OpenSearch', 'Elasticsearch', 'Flask', 'Celery', 'MongoDB'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Global Search Module',
    description:
      'Built a unified search solution with real-time indexing and intelligent ranking algorithms, providing contextual results across banking products, customers, and transactions.',
    techStack: ['Python', 'FastAPI', 'Elasticsearch', 'Redis', 'MySQL', 'Docker'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Merchant Transaction Portal',
    description:
      'Developed a high-performance transaction processing system handling 100K+ daily transactions with real-time reporting, analytics dashboards, and fraud detection integration.',
    techStack: ['Python', 'Django', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Nginx'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Payment Gateway Integration Suite',
    description:
      'Created a modular payment processing framework integrating multiple third-party gateways with unified APIs, automated reconciliation, and comprehensive transaction logging.',
    techStack: ['Python', 'FastAPI', 'Redis', 'MongoDB', 'Docker', 'CI/CD'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Real-time Notification Engine',
    description:
      'Engineered an event-driven notification system supporting SMS, email, and push notifications with templating, scheduling, and delivery tracking for banking alerts.',
    techStack: ['Python', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'WebSockets'],
    gradient: 'from-teal-500 to-green-500',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 border-2 group">
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#3776ab] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
