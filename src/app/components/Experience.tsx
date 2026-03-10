import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'The City Bank PLC',
    location: 'Dhaka, Bangladesh',
    role: 'Associate Manager, Sr Software Developer — DFS Tech',
    duration: 'May 2022 – Present',
    highlights: [
      'Built Customer 360 Search module providing a unified 360° view of customers across all liability products — accounts, cards, deposits, and instruments — eliminating data silos.',
      'Developed Global Search module for end-to-end traceability of operations across distributed microservices, improving audit readiness and issue resolution.',
      'Delivered Government Securities Investment Management System (Nov 2024 – Dec 2025): bill/bond portfolio management, BPID workflows, RPA integrations, and automated coupon/maturity settlement.',
      'Engineered City eMemo approval chain with role-based dynamic routing and integrated email approval, reducing internal workflow delays.',
      'Dockerized CBL Achallan RPA service automating challan processing to the NBR portal, significantly reducing manual workload.',
      'Developed NID validation service with secure APIs integrated with EC service for high-availability identity verification.',
      'Built CBL SmartBoT — an AI-powered customer assistant using Flask, MongoDB, and Socket.IO with NLP support.',
      'Delivered City Bank Ekhoni Account (Citytouch Integration): full microservices stack including BFF, OTP, NID OCR, Face Matching, CBS, and SSO services using Redis and OpenSearch.',
      'Built FCM-based CityTouch Push Notification module with campaign scheduling and instant custom messaging.',
      'Engineered Campaign Management System SMS delivery backend using Celery, RabbitMQ, and Redis — reducing costs by 42% via direct MNO integration.',
    ],
  },
  {
    company: 'adorsho praniSheba Ltd',
    location: 'Dhaka, Bangladesh',
    role: 'Sr Software Developer & DevOps',
    duration: 'Jan 2020 – May 2022',
    highlights: [
      'Led backend development for Pranisheba IoT Platform — an IoT-based cattle monitoring system with AI/ML models for facial recognition, health monitoring, and automation in rural cattle management.',
      'Built JouthoKhamar Investment Platform: RESTful APIs for a digital cattle investment platform enabling investor-farmer collaboration with transparent profit-sharing.',
      'Deployed Cattle Face Detection ML API as a production-ready REST API for cattle identification using facial recognition.',
      'Tech stack: Python, Django REST Framework, Celery, Redis, VerneMQ, MongoDB, MySQL, TensorFlow, Docker, Nginx, Gunicorn, Vue.js.',
    ],
  },
  {
    company: 'shurjoMukhi Ltd',
    location: 'Dhaka, Bangladesh',
    role: 'Software Developer → Junior Software Developer',
    duration: 'Jan 2017 – Dec 2019',
    highlights: [
      'Promoted for exceeding goals and enhancing company culture.',
      'Enhanced backend for shurjomukhi PraniSheba mobile app integrating third-party IoT solutions (smaxTec) and FCM notifications. Stack: Python, Django REST Framework, Celery, RabbitMQ, MySQL.',
      'Contributed to Bangladesh Ordnance Factory (BOF) ERP project — requirements gathering and SOP documentation.',
      'Developed APIs and reports for Cash Management Decision Support System (CMDSS) for Trust Bank. Stack: PHP, Laravel 5, JavaScript, MS SQL, Node.js.',
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
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
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
