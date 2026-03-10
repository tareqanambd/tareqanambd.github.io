import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Banking Corp',
    role: 'Senior Python Software Developer',
    duration: 'Jan 2021 - Present',
    highlights: [
      'Architected and deployed microservices-based banking platform serving 2M+ users',
      'Designed Customer 360 Search system using OpenSearch, reducing query time by 70%',
      'Led development of Global Search Module with advanced filtering and real-time indexing',
      'Implemented CI/CD pipelines with Docker, reducing deployment time from hours to minutes',
    ],
  },
  {
    company: 'FinTech Solutions Ltd',
    role: 'Python Backend Developer',
    duration: 'Mar 2018 - Dec 2020',
    highlights: [
      'Built Merchant Transaction Portal handling 100K+ daily transactions',
      'Developed asynchronous processing pipelines with Celery and RabbitMQ',
      'Optimized database queries, improving API response time by 60%',
      'Integrated third-party payment gateways and fraud detection systems',
    ],
  },
  {
    company: 'Digital Banking Inc',
    role: 'Software Developer',
    duration: 'Jun 2015 - Feb 2018',
    highlights: [
      'Developed RESTful APIs for mobile banking application',
      'Implemented authentication and authorization systems with JWT',
      'Created automated testing suite with 90% code coverage',
      'Collaborated with frontend team to deliver seamless user experiences',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3776ab] to-[#10b981]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-[23px] top-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#3776ab] to-[#10b981] border-4 border-background" />

                <div className="bg-card border-2 border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#3776ab]" />
                        {exp.role}
                      </h3>
                      <p className="text-lg text-[#10b981] mt-1">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {exp.duration}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-foreground/80">
                        <span className="text-[#3776ab] mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
