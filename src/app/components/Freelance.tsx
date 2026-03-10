import { motion } from 'motion/react';
import { Lock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const freelanceProjects = [
  {
    title: 'FaceAuth — Identity Verification API',
    description:
      'Production-ready identity verification API combining AWS Face Liveness detection, ID document OCR via AWS Textract, and face comparison via AWS Rekognition. Includes API key auth, session management, and webhook support.',
    techStack: ['Python', 'FastAPI', 'AWS Rekognition', 'AWS Textract', 'Docker'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'SnapValue — AI Product Recognition App',
    description:
      'AI-powered mobile app that identifies products from photos and returns real-time pricing, marketplace recommendations, and similar product suggestions. Powered by Gemini AI and Serper API.',
    techStack: ['Flutter', 'Dart', 'Gemini AI', 'Serper API'],
    gradient: 'from-[#3776ab] to-cyan-500',
  },
  {
    title: 'SKATR — AI Figure Skating Analyzer',
    description:
      'Mobile app for figure skaters to record jumps, analyse air time, rotations, and landing stability using AI. Includes progress tracking, achievement system, structured training plans, and personalised AI insights.',
    techStack: ['Flutter', 'Dart', 'AI/ML', 'Video Analysis'],
    gradient: 'from-[#10b981] to-emerald-500',
  },
  {
    title: 'IoT Real-Time Object Detection Platform',
    description:
      'Multi-tenant FastAPI backend for IoT edge devices running YOLOv8 object detection. Features role-based access control, per-label confidence thresholds, Telegram notifications with smart cooldowns, and a unified admin/customer dashboard.',
    techStack: ['Python', 'FastAPI', 'YOLOv8', 'JWT', 'Telegram API', 'Docker'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Road Asset Detection System',
    description:
      'AI-powered dashboard for road asset detection from video footage. Detects 30 asset classes with GPS coordinates, generates analytics indices (Road Health Score, PDI, Crack Severity, Sign Coverage), and exports reports in CSV, Excel, and JSON.',
    techStack: ['Python', 'YOLOv8', 'FastAPI', 'GPS', 'Docker', 'Data Analytics'],
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Beyond the Day Job
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Client work, team ventures, and personal products built outside the day job —
            spanning mobile apps, AI, IoT, and computer vision. Private repositories;
            happy to walk through architecture and decisions in an interview.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 border-2 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <span className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    <Lock className="w-3 h-3" />
                    Private
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#3776ab] transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Users className="w-4 h-4" />
          <span>Delivered as team collaborations and individual client engagements</span>
        </motion.div>
      </div>
    </section>
  );
}
