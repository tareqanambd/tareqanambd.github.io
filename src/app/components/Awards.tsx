import { motion } from 'motion/react';
import { Trophy, FileText } from 'lucide-react';
import { Card } from './ui/card';

const awards = [
  {
    title: 'Level 4 Gold Kite — Certificate of Appreciation',
    organization: 'City Bank PLC · 2024',
    description: 'Pioneered the first-ever MICR integration with the Core Banking System — reduced transaction processing time and ensured zero errors in cheque number inputs.',
  },
  {
    title: 'Level 3 Blue Kite — Certificate of Appreciation',
    organization: 'City Bank PLC · 2024',
    description: 'Recognized for implementing RPA in Bulk A-Challan Payment automation to the NBR portal, significantly reducing manual workload.',
  },
  {
    title: 'Level 3 Blue Kite — Certificate of Appreciation',
    organization: 'City Bank PLC · 2023',
    description: 'Recognized for developing the SMS Gateway and Campaign Management System — introduced direct MNO integration reducing campaign costs by 30%.',
  },
];

const publications = [
  {
    title: 'Muzzle-Based Cattle Identification System Using Artificial Intelligence (AI)',
    venue: 'International Conference on 4IR for Emerging Future',
    year: 'Nov 2022',
    description: 'Co-authored research on AI-driven muzzle-based cattle biometric identification. Contributors: Tareq Anam, Hasan Zohirul Islam, Safayet Khan, Sanjib Kumar Paul, Sheikh Imtiaz Rahi, Fahim Hossain, Md. Mahadi Hasan Sany, Md. Shahjahan Ali Sarker, Ismail Hossain Polas.',
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
