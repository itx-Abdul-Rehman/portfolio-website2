import { motion } from "framer-motion";

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
