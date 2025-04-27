"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface QuizCardProps {
  quiz: {
    id: string
    title: string
    description: string
    image: string
    questions: number
  }
}

export function QuizCard({ quiz }: QuizCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-lg border bg-background shadow-sm"
    >
      <div className="relative h-48 w-full">
        <Image
          src={quiz.image}
          alt={quiz.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{quiz.title}</h3>
        <p className="mt-2 text-muted-foreground">{quiz.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{quiz.questions} questions</span>
          <Link
            href={`/quiz/${quiz.id}`}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </motion.div>
  )
}