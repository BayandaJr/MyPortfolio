'use client'

import { motion } from 'motion/react'
import { Trophy, Users, Lightbulb, Target } from 'lucide-react'
import { Reveal } from './reveal'

const pillars = [
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Users, label: 'Teamwork' },
  { icon: Target, label: 'Problem-Solving' },
]

export function Achievements() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 text-center md:p-14">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            </div>

            <div className="relative">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-accent"
              >
                <Trophy className="h-8 w-8" />
              </motion.span>

              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                Achievement Highlight
              </span>

              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                AIDC Hackathon — 2nd Place Winner
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Recognized for innovation, teamwork, problem-solving, and technical skills during a
                competitive hackathon challenge.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {pillars.map((pillar) => (
                  <span
                    key={pillar.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <pillar.icon className="h-4 w-4 text-accent" />
                    {pillar.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
