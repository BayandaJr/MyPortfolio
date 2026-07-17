'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1400)
    return () => clearTimeout(id)
  }, [])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-serif text-xl font-bold text-primary-foreground"
          >
            BM
          </motion.span>
          <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-secondary">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full w-full rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
          <p className="mt-4 text-sm tracking-widest text-muted-foreground">LOADING</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
