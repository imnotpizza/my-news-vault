'use client';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

/** fade in/out duration (초) */
const FADE_DURATION_SEC = 0.7;

export function FadeInAnimContainer({
  type = 'none',
  delay = 0,
  children,
}: {
  type: 'left-right' | 'top-bottom' | 'bottom-top' | 'right-left' | 'none';
  delay?: number;
  children: React.ReactNode;
}) {
  const transition = useMemo(
    () => ({
      ease: [0.01, 0.08, 0.1, 1],
      duration: FADE_DURATION_SEC,
      delay,
    }),
    [delay],
  );

  const options = useMemo(() => {
    switch (type) {
      case 'left-right':
        return {
          initial: { opacity: 0, x: -40 },
          animate: { opacity: 1, x: 0, transition },
        };
      case 'top-bottom':
        return {
          initial: { opacity: 0, y: -40 },
          animate: { opacity: 1, y: 0, transition },
        };
      case 'bottom-top':
        return {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0, transition },
        };
      case 'right-left':
        return {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0, transition },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition },
        };
    }
  }, [type, transition]);

  return (
    <motion.div initial={options.initial} animate={options.animate}>
      {children}
    </motion.div>
  );
}
