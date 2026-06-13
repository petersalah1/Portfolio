'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'NextShop E-commerce Platform',
    description:
      'A full e-commerce web application built with Next.js, React, Tailwind CSS, React Query, Axios, and Context API. Includes authentication, product browsing, cart management, checkout, online payment, and user orders.',
    image: '/images/nextshop.webp',
    fallbackGradient: 'from-blue-600 to-cyan-400',
    tags: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'React Query',
      'Axios',
      'Context API',
      'Auth',
      'Checkout',
      'Payment',
      'Orders',
    ],
    demoLink: 'https://next-shop21.vercel.app/',
    githubLink: 'https://github.com/petersalah1/nextShop',
  },
  {
    title: 'Ahmed Megaly Educational Platform',
    description:
      'A modern Arabic RTL educational platform with courses, lessons, exams, revisions, protected video pages, store, cart, checkout, Google login, and backend API integration.',
    image: '/images/mega.webp',
    fallbackGradient: 'from-indigo-700 to-blue-500',
    tags: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'React Query',
      'Axios',
      'RTL',
      'Google Login',
      'Protected Routes',
    ],
    demoLink: 'https://ahmedmegaly.sck.guru/',
    githubLink: '',
  },
  {
    title: 'Nivirra Tourism Website',
    description:
      'A responsive tourism website built with HTML, CSS, and Vanilla JavaScript, featuring trips, offers, traveler feedback, map section, and an interactive tailor-made tour request flow.',
    image: '/images/nivirra.webp',
    fallbackGradient: 'from-orange-500 to-yellow-400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    demoLink:
      'https://petersalah1.github.io/Nivirra/index.html',
    githubLink: '',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6" />

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A selection of real and personal projects built with modern front-end technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[2rem] overflow-hidden bg-white dark:bg-[#020617] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
            >

              {/* IMAGE SECTION (OPTIMIZED ONLY) */}
              <div
                className={`relative w-full h-72 bg-gradient-to-br ${project.fallbackGradient} overflow-hidden`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white text-sm font-semibold py-3 px-6 rounded-full backdrop-blur-md shadow-lg">
                    View Project Details
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">

                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center space-x-4 mt-auto">

                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center py-4 px-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={18} className="ml-2" />
                  </Link>

                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FaGithub size={24} />
                    </Link>
                  )}

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}