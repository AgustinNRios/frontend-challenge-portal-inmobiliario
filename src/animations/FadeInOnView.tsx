"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInOnView({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // 'once' dispara solo la primera vez

    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // si está en vista, animar
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}