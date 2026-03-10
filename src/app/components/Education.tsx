import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    year: '2011 - 2015',
    highlights: ['Focus on Software Engineering and Database Systems', 'GPA: 3.8/4.0'],
  },
  {
    degree: 'Master of Science in Software Engineering',
    institution: 'Institute of Advanced Computing',
    year: '2015 - 2017',
    highlights: ['Thesis: Scalable Microservices Architectures', 'Specialization in Distributed Systems'],
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2022',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2021',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    year: '2020',
  },
  {
    title: 'Python Advanced Programming',
    issuer: 'Python Institute',
    year: '2019',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#3776ab]" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-5 border-2 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-[#10b981] mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.year}</p>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex gap-2">
                        <span className="text-[#3776ab]">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#10b981]" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4 border-2 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <span className="text-xs bg-[#3776ab]/10 text-[#3776ab] px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
