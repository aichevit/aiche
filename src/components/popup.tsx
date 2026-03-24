import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChemathonPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Shows the popup after 4 seconds (giving the intro time to finish)
    const timer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000] max-w-sm w-[90vw] bg-[#fdfbf7] border border-[#d4b483]/50 shadow-2xl p-6 font-sans flex flex-col gap-3"
        >
          {/* Accent Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#8e1a1a]" />

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-[#8e1a1a]/60 hover:text-[#8e1a1a] transition-colors"
            aria-label="Close popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Content */}
          <div className="pr-4">
            <p className="text-[#8e1a1a] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8e1a1a] animate-pulse"></span>
              Live Now
            </p>
            <h3 className="text-2xl md:text-3xl font-serif text-[#4a0a0a] leading-tight">
              Chemathon 7.0
            </h3>
            <p className="text-sm text-black/70 mt-2 font-light">
              Our flagship event is officially live. Register now and showcase your chemical brilliance.
            </p>
          </div>

          {/* Action Button */}
          <a
            href="https://chemathon.aichevit.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-center bg-[#8e1a1a] text-[#fdfbf7] py-2.5 px-4 font-medium text-sm transition-all hover:bg-[#4a0a0a] hover:shadow-lg"
          >
            Visit Website &rarr;
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChemathonPopup;