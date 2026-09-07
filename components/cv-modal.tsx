"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiDownload, FiExternalLink } from "react-icons/fi";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl?: string | null;
}

export default function CvModal({ isOpen, onClose, cvUrl }: CvModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Convert Google Drive view URL to preview URL for iframe embedding
  const getEmbedUrl = (url?: string | null) => {
    if (!url) return "/CV-Ayne-Abreham.pdf";
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    return url;
  };

  const embedSrc = getEmbedUrl(cvUrl);
  const directUrl = cvUrl || "/CV-Ayne-Abreham.pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Dialog Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl h-[88vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/5 dark:border-white/10 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Ayne Abreham - Curriculum Vitae
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Full-Stack Developer Resume
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                  title="Open in new tab"
                >
                  <FiExternalLink className="text-sm" />
                  <span>Open Fullscreen</span>
                </a>

                <a
                  href="/CV-Ayne-Abreham.pdf"
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
                  title="Download PDF directly"
                >
                  <FiDownload className="text-sm" />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ml-1 cursor-pointer"
                  aria-label="Close CV Preview"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Document Iframe Body */}
            <div className="flex-1 w-full h-full bg-gray-100 dark:bg-gray-950 relative">
              <iframe
                src={embedSrc}
                title="Ayne Abreham CV Preview"
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
