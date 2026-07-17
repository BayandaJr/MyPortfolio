'use client'

import { motion } from 'motion/react'
import { Globe, Sparkles, Trophy, type LucideIcon } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Sparkles,
  Trophy,
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A selection of projects and explorations spanning web development, generative AI, and collaborative innovation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] ?? Globe
            return (
              <Reveal key={project.title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    {project.achievement ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        <Trophy className="h-3.5 w-3.5" />
                        {project.achievement}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="relative mt-5 font-serif text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
