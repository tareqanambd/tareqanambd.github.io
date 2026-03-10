import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Customer 360 Search Module',
    description:
      'Designed and implemented a unified customer identification and profiling system at City Bank, aggregating all liability products — accounts, cards, deposits, instruments — into a single 360° view, eliminating data silos and accelerating customer onboarding.',
    techStack: ['Python', 'FastAPI', 'OpenSearch', 'Redis', 'Docker', 'MySQL'],
    gradient: 'from-[#3776ab] to-cyan-500',
  },
  {
    title: 'Government Securities Investment System',
    description:
      'Developed and maintained microservices for bill and bond portfolio management with real-time stakeholder notifications, BPID opening workflows, RPA integrations, and end-to-end buy/sell/auction processing from branch to back-office.',
    techStack: ['Python', 'FastAPI', 'RabbitMQ', 'Celery', 'Docker', 'OracleDB'],
    gradient: 'from-[#10b981] to-emerald-500',
  },
  {
    title: 'City Bank Ekhoni Account',
    description:
      'Delivered a seamless digital account opening platform via Citytouch with a full microservices stack: BFF, Gateway, OTP, NID OCR, Face Matching, NID RPA, CBS, DB, Admin, Log, and SSO services — backed by Redis and OpenSearch.',
    techStack: ['Python', 'Flask', 'FastAPI', 'Redis', 'OpenSearch', 'Docker', 'SSO'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Pranisheba IoT Platform',
    description:
      'Led backend development for an IoT-based cattle monitoring system with custom sensors and AI/ML models for facial recognition, health monitoring, and automation — supporting government digital transformation initiatives in rural cattle management.',
    techStack: ['Python', 'Django', 'TensorFlow', 'VerneMQ', 'MongoDB', 'Docker', 'Vue.js'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'CBL SmartBoT',
    description:
      'Built a real-time AI-powered customer assistant chatbot using Flask, MongoDB, and Socket.IO, supporting customer queries through NLP and enhancing user interaction across City Bank\'s banking services.',
    techStack: ['Python', 'Flask', 'MongoDB', 'Socket.IO', 'NLP', 'Docker'],
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Campaign Management System',
    description:
      'Engineered SMS campaign delivery backend using Celery, RabbitMQ, and Redis with dynamic/static message processing. Direct MNO integration reduced campaign delivery costs by 42%.',
    techStack: ['Python', 'Celery', 'RabbitMQ', 'Redis', 'MySQL', 'Docker'],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    title: 'Cattle Face Detection ML API',
    description:
      'Deployed a production-ready facial recognition model as a REST API for cattle identification at adorsho praniSheba, ensuring accurate record-keeping and monitoring across livestock management workflows.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'PaddlePaddle', 'FastAPI', 'Docker'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'E-Bazar E-commerce Platform',
    description:
      'Personal project — built a full e-commerce backend with coupon management system, FCM real-time push notifications for order status, email verification, and delivery tracking.',
    techStack: ['Python', 'Django REST Framework', 'FCM', 'MySQL', 'Docker'],
    gradient: 'from-amber-500 to-orange-500',
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
