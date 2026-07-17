'use client'

import { motion } from 'motion/react'
import { Code2, Users } from 'lucide-react'
import { professionalSkills, technicalSkills } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

function SkillGrid({ skills, accent }: { skills: string[]; accent: boolean }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.03 }}
          whileHover={{ y: -3, scale: 1.04 }}
          className={
            accent
              ? 'cursor-default rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60'
              : 'cursor-default rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60'
          }
        >
          {skill}
        </motion.span>
      ))}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I bring"
          title="Skills & Expertise"
          description="A blend of technical proficiency and professional strengths that power effective, human-centered software solutions."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Technical Skills</h3>
                  <p className="text-sm text-muted-foreground">Tools, languages & platforms</p>
                </div>
              </div>
              <SkillGrid skills={technicalSkills} accent={false} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-7 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Professional Skills
                  </h3>
                  <p className="text-sm text-muted-foreground">How I collaborate & lead</p>
                </div>
              </div>
              <SkillGrid skills={professionalSkills} accent />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
