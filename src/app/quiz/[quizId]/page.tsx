"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Sample quiz data - in a real app, you'd fetch this from an API based on quizId
const quizzes = {
  // "best-laptop": {
  //   title: "Find Your Perfect Laptop",
  //   description: "Answer a few questions to discover the best laptop for your needs and budget.",
  //   questions: [
  //     {
  //       id: "usage",
  //       question: "What will you primarily use your laptop for?",
  //       options: [
  //         { id: "general", text: "General use (web browsing, email, documents)" },
  //         { id: "student", text: "Student work (assignments, research, notes)" },
  //         { id: "professional", text: "Professional work (programming, design, video editing)" },
  //         { id: "gaming", text: "Gaming" },
  //       ],
  //     },
  //     {
  //       id: "budget",
  //       question: "What's your budget?",
  //       options: [
  //         { id: "budget", text: "Under $500" },
  //         { id: "mid-range", text: "$500 - $1000" },
  //         { id: "high-end", text: "$1000 - $1500" },
  //         { id: "premium", text: "Over $1500" },
  //       ],
  //     },
  //     {
  //       id: "size",
  //       question: "What screen size do you prefer?",
  //       options: [
  //         { id: "small", text: "13 inches or smaller (ultra-portable)" },
  //         { id: "medium", text: "14-15 inches (balanced)" },
  //         { id: "large", text: "16 inches or larger (desktop replacement)" },
  //       ],
  //     },
  //     {
  //       id: "battery",
  //       question: "How important is battery life to you?",
  //       options: [
  //         { id: "not-important", text: "Not important (mostly used plugged in)" },
  //         { id: "somewhat", text: "Somewhat important (4-6 hours is fine)" },
  //         { id: "very", text: "Very important (need 8+ hours)" },
  //       ],
  //     },
  //     {
  //       id: "os",
  //       question: "Which operating system do you prefer?",
  //       options: [
  //         { id: "windows", text: "Windows" },
  //         { id: "macos", text: "macOS" },
  //         { id: "chrome", text: "Chrome OS" },
  //         { id: "linux", text: "Linux" },
  //       ],
  //     },
  //   ],
  // },
  // Weight Loss Quiz
  "weight-loss": {
    title: "Find Your Perfect Weight Loss Solution",
    description: "Answer a few questions to discover the best weight loss products and supplements for your goals and lifestyle.",
    questions: [
      {
        id: "goal",
        question: "What is your primary weight loss goal?",
        options: [
          { id: "fat-burn", text: "Burn fat and lose weight quickly" },
          { id: "metabolism", text: "Boost metabolism for sustainable weight loss" },
          { id: "appetite", text: "Control appetite and reduce cravings" },
          { id: "muscle", text: "Lose fat while maintaining muscle" },
        ],
      },
      {
        id: "diet",
        question: "What type of diet do you currently follow?",
        options: [
          { id: "standard", text: "Standard mixed diet (no restrictions)" },
          { id: "low-carb", text: "Low-carb or keto diet" },
          { id: "vegetarian", text: "Vegetarian or plant-based" },
          { id: "vegan", text: "Vegan" },
        ],
      },
      {
        id: "exercise",
        question: "How would you describe your exercise routine?",
        options: [
          { id: "sedentary", text: "Mostly sedentary (little to no exercise)" },
          { id: "light", text: "Light activity (walking, light housework)" },
          { id: "moderate", text: "Moderate exercise (3-5 days per week)" },
          { id: "intense", text: "Intense exercise (6-7 days per week)" },
        ],
      },
      {
        id: "health",
        question: "Do you have any health conditions to consider?",
        options: [
          { id: "none", text: "No health concerns" },
          { id: "diabetes", text: "Diabetes or insulin resistance" },
          { id: "thyroid", text: "Thyroid issues" },
          { id: "heart", text: "Heart or blood pressure concerns" },
        ],
      },
      {
        id: "preference",
        question: "What type of weight loss product do you prefer?",
        options: [
          { id: "supplement", text: "Dietary supplements (pills, capsules)" },
          { id: "shake", text: "Meal replacement shakes" },
          { id: "tea", text: "Weight loss teas or drinks" },
          { id: "program", text: "Complete weight loss programs" },
        ],
      },
    ],
  },
  // Add more quizzes here
}

export default function QuizPage({ params }: { params: Promise<{ quizId: string }> }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const { quizId } = unwrappedParams;
  
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  
  const quiz = quizzes[quizId as keyof typeof quizzes]
  console.log("🚀 ~ QuizPage ~ quiz:", quiz)
  
  if (!quiz) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Quiz Not Found</h1>
            <p className="mt-4">Sorry, the quiz you're looking for doesn't exist.</p>
          </div>
        </main>
      </div>
    )
  }
  
  const question = quiz.questions[currentQuestion]
  
  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [question.id]: optionId }
    setAnswers(newAnswers)
    
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Navigate to results page with answers
      const queryParams = new URLSearchParams()
      Object.entries(newAnswers).forEach(([key, value]) => {
        queryParams.append(key, value)
      })
      router.push(`/quiz/${quizId}/results?${queryParams.toString()}`)
    }
  }
  
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{quiz.title}</h1>
          <p className="text-muted-foreground mt-2">{quiz.description}</p>
          <div className="w-full h-2 bg-muted rounded-full mt-6">
            <div 
              className="h-2 bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg border shadow-sm p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
            <div className="space-y-4">
              {question.options.map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.id)}
                  className="w-full text-left p-4 rounded-md border bg-background hover:bg-accent transition-colors"
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}