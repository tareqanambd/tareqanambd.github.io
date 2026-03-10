import { motion } from 'motion/react';
import { Trophy, FileText } from 'lucide-react';
import { Card } from './ui/card';

const awards = [
  {
    title: 'Banking Innovation Award 2023',
    organization: 'FinTech Excellence Forum',
    description: 'Recognized for pioneering Customer 360 Search System implementation',
  },
  {
    title: 'Technical Excellence Award',
    organization: 'Tech Banking Corp',
    description: 'Outstanding contribution to microservices architecture and platform scalability',
  },
  {
    title: 'Best Engineering Team Award 2022',
    organization: 'Regional Banking Summit',
    description: 'Led team in developing award-winning transaction processing system',
  },
];

const publications = [
  {
    title: 'Machine Learning Applications in Banking Fraud Detection',
    venue: 'International Journal of FinTech Research',
    year: '2023',
    description: 'Co-authored research paper on AI-driven fraud prevention systems',
  },
  {
    title: 'Microservices Best Practices for Banking Platforms',
    venue: 'Tech Banking Conference Proceedings',
    year: '2022',
    description: 'Published case study on scalable architecture patterns',
  },
];

export function Awards() {
  return (
    <section id="awards" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Awards & Publications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#3776ab]" />
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-5 border-2 hover:shadow-lg transition-shadow">
                  <div className="flex gap-3">
                    <div className="p-2 h-fit bg-gradient-to-br from-[#3776ab] to-blue-600 rounded-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{award.title}</h4>
                      <p className="text-sm text-[#10b981] mb-2">{award.organization}</p>
                      <p className="text-sm text-foreground/70">{award.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#10b981]" />
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="p-5 border-2 hover:shadow-lg transition-shadow">
                  <div className="flex gap-3">
                    <div className="p-2 h-fit bg-gradient-to-br from-[#10b981] to-emerald-600 rounded-lg">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{pub.title}</h4>
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-sm text-muted-foreground">{pub.venue}</p>
                        <span className="text-xs bg-[#10b981]/10 text-[#10b981] px-2 py-1 rounded">
                          {pub.year}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70">{pub.description}</p>
                    </div>
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
