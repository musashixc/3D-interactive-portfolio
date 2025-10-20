// src/components/sections/projects.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import projects from "../../data/projects"; // relative path from components/sections -> src/data

export default function ProjectsSection(): JSX.Element {
  // mount gate to prevent SSR/CSR mismatch (hydration errors)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  if (!mounted) {
    // return minimal deterministic markup during SSR to avoid hydration mismatch
    return (
      <section id="projects" className="relative z-[5] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        </div>
      </section>
    );
  }

  const openProject = (idx: number) => {
    setSelectedProjectIndex(idx);
    setZoomImage(null);
    // prevent background scroll when modal opens
    document.body.style.overflow = "hidden";
  };
  const closeProject = () => {
    setSelectedProjectIndex(null);
    setZoomImage(null);
    document.body.style.overflow = "";
  };

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <section
      id="projects"
      // this keeps projects above the keyboard background
      className="relative z-[5] py-20 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => openProject(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="text-left cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition-all border border-zinc-800 hover:border-zinc-600 p-0"
              aria-label={`Open project ${p.title}`}
              style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}
            >
              <div style={{ height: 240, overflow: "hidden" }}>
                <img
                  src={p.images[0]}
                  alt={`${p.title} thumbnail`}
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p
                  className="text-sm text-zinc-400 line-clamp-3"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {p.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <Dialog open={!!selectedProject} onClose={closeProject} className="relative z-[50]">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className="relative max-w-4xl w-full bg-zinc-950 rounded-2xl p-6 border border-zinc-800"
            // ensure dialog panel is a focus trap and layout is stable
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={closeProject}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedProject && (
              <>
                <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 whitespace-pre-line">
                  {selectedProject.description}
                </p>

                {/* IMPORTANT FIXES:
                    - Wrap screenshots in a scrollable container (max height)
                    - Use pointer-friendly settings and allow vertical pan (touchAction)
                    - Make individual images 'object-contain' so they don't expand beyond width
                */}
                <div
                  className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-3"
                  style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
                >
                  {selectedProject.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-xl border border-zinc-800 cursor-zoom-in"
                      onClick={() => setZoomImage(img)}
                      style={{ display: "block" }}
                    >
                      <img
                        src={img}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        className="w-full h-auto object-contain"
                        style={{ display: "block" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Zoom modal (constrained) */}
      <Dialog open={!!zoomImage} onClose={() => setZoomImage(null)} className="relative z-[60]">
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-6">
          <div className="relative w-[85vw] h-[85vh] flex items-center justify-center">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-3 right-3 z-50 text-zinc-300 hover:text-white text-2xl rounded-full bg-black/30 p-1"
              aria-label="Close zoom"
            >
              ×
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.12 }}
              className="w-full h-full flex items-center justify-center"
            >
              {zoomImage && (
                <img
                  src={zoomImage}
                  alt="Zoomed screenshot"
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-zinc-800"
                  style={{ display: "block" }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
