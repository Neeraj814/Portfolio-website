import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import { aboutInfo } from "@/data/portfolio-data";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = duration / numericValue;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericValue) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-bold gradient-text mb-2">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 border border-primary/5 rounded-full"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="gradient-text">{aboutInfo.heading}</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-xl p-8 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="p-3 rounded-lg bg-primary/10 text-primary"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <User className="h-6 w-6" />
              </motion.div>
              <div className="flex-1 space-y-4">
                {aboutInfo.description.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutInfo.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4, type: "spring" }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all cursor-default"
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.value.replace(/[0-9]/g, "")}
                />
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
