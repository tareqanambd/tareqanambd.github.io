import { motion } from 'motion/react';
import { Code2, MessageSquare, Database, Wrench, Activity } from 'lucide-react';
import { Card } from './ui/card';

const skillGroups = [
  {
    title: 'Backend',
    icon: Code2,
    color: 'from-[#3776ab] to-blue-600',
    skills: ['Python', 'Django', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    title: 'Messaging & Async',
    icon: MessageSquare,
    color: 'from-[#10b981] to-emerald-600',
    skills: ['Celery', 'RabbitMQ', 'Redis', 'Async Processing'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-blue-500 to-cyan-600',
    skills: ['MySQL', 'MongoDB', 'Oracle', 'PostgreSQL', 'Query Optimization'],
  },
  {
    title: 'DevOps',
    icon: Wrench,
    color: 'from-purple-500 to-pink-600',
    skills: ['Docker', 'CI/CD', 'Nginx', 'Gunicorn', 'Linux'],
  },
  {
    title: 'Observability',
    icon: Activity,
    color: 'from-orange-500 to-red-600',
    skills: ['OpenSearch', 'Elasticsearch', 'Logging', 'Monitoring', 'APM'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${group.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
