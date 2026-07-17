'use client'

import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-7 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <GraduationCap className="h-7 w-7" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {education.institution}
                  </h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {education.year}
                  </span>
                </div>
                <p className="mt-1 text-base font-semibold text-primary">
                  {education.qualification}
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
