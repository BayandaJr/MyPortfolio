'use client'

import { motion } from 'motion/react'
import { BadgeCheck } from 'lucide-react'
import { certifications } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Verified credentials"
          title="Certifications"
          description="Professional certifications from Google, Microsoft, GitHub, and NEMISA across AI, cloud, and cybersecurity."
        />

        <div className="relative">
          {/* timeline line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent md:left-1/2"
            aria-hidden="true"
          />

          <ul className="space-y-6 md:space-y-8">
            {certifications.map((cert, i) => {
              const left = i % 2 === 0
              return (
                <li key={cert.title} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <span
                    className="absolute left-4 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-4 ring-background md:left-1/2"
                    aria-hidden="true"
                  />
                  <Reveal
                    delay={i * 0.05}
                    className={
                      left
                        ? 'md:col-start-1 md:text-right'
                        : 'md:col-start-2'
                    }
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={
                        'glass ml-10 rounded-2xl p-5 md:ml-0 ' +
                        (left ? 'md:mr-2' : 'md:ml-2')
                      }
                    >
                      <div
                        className={
                          'flex items-start gap-3 ' + (left ? 'md:flex-row-reverse md:text-right' : '')
                        }
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-accent">
                          <BadgeCheck className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold leading-snug text-foreground">
                            {cert.title}
                          </h3>
                          <p className="mt-1 text-sm text-primary">{cert.issuer}</p>
                          <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
