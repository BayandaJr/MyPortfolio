import { Mail } from 'lucide-react'
import { navLinks, personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-serif text-sm font-bold text-primary-foreground">
                BM
              </span>
              <span className="font-serif text-lg font-semibold text-foreground">
                {personal.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              ICT Applications Development Graduate
              <br />
              Azure Developer Associate
              <br />
              Google AI Essentials Certificate Holder
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="mt-4 flex gap-2">
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary hover:text-accent"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary hover:text-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 {personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
