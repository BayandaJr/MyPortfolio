'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Award, BrainCircuit, Cloud, ShieldCheck } from 'lucide-react'
import { aboutParagraphs, personal } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  { icon: Cloud, label: 'Cloud Computing', value: 'Microsoft Azure' },
  { icon: BrainCircuit, label: 'Artificial Intelligence', value: 'Generative AI' },
  { icon: ShieldCheck, label: 'Security', value: 'Cybersecurity' },
  { icon: Award, label: 'Certifications', value: 'Google & Microsoft' },
]

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/20 blur-xl" />
              <div className="glass relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/bayanda-photo.png"
                  alt="Bayanda Junior Mhlwathika"
                  width={480}
                  height={600}
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="space-y-4">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass flex items-center gap-3 rounded-2xl p-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">2025</p>
                  <p className="text-sm text-muted-foreground">Graduate</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">8+</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">2nd</p>
                  <p className="text-sm text-muted-foreground">Hackathon Place</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
