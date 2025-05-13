"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react"

const quizQuestions = [
  {
    id: 1,
    question: "What's your current experience level with AI?",
    options: [
      { id: "beginner", label: "Beginner - I'm just getting started" },
      { id: "intermediate", label: "Intermediate - I understand the basics" },
      { id: "advanced", label: "Advanced - I've built AI projects before" },
      { id: "expert", label: "Expert - I work with AI professionally" },
    ],
  },
  {
    id: 2,
    question: "What aspect of AI interests you the most?",
    options: [
      { id: "ml", label: "Machine Learning & Data Science" },
      { id: "nlp", label: "Natural Language Processing" },
      { id: "cv", label: "Computer Vision" },
      { id: "rl", label: "Reinforcement Learning" },
      { id: "generative", label: "Generative AI" },
    ],
  },
  {
    id: 3,
    question: "What's your primary goal with AI?",
    options: [
      { id: "career", label: "Start or advance my career" },
      { id: "project", label: "Build a specific project or product" },
      { id: "research", label: "Conduct research or experiments" },
      { id: "knowledge", label: "General knowledge and staying current" },
    ],
  },
  {
    id: 4,
    question: "How much time can you dedicate to learning?",
    options: [
      { id: "minimal", label: "A few hours per month" },
      { id: "moderate", label: "A few hours per week" },
      { id: "significant", label: "10+ hours per week" },
      { id: "fulltime", label: "Full-time focus" },
    ],
  },
]

const learningPaths = {
  beginner: {
    ml: {
      title: "Foundations of Machine Learning",
      description:
        "Start your AI journey with the fundamentals of machine learning, statistics, and Python programming.",
      modules: [
        "Python for Data Science",
        "Statistics Fundamentals",
        "Intro to Machine Learning",
        "Supervised Learning Basics",
      ],
      duration: "3-4 months",
    },
    nlp: {
      title: "Introduction to NLP",
      description: "Learn the basics of natural language processing and how computers understand human language.",
      modules: ["Python Fundamentals", "Text Processing Basics", "Language Models Intro", "Building Simple Chatbots"],
      duration: "3-4 months",
    },
    generative: {
      title: "Generative AI Fundamentals",
      description: "Discover how AI can create new content and the basics behind generative models.",
      modules: ["AI Fundamentals", "Intro to Neural Networks", "Prompt Engineering Basics", "Using Generative Models"],
      duration: "2-3 months",
    },
  },
  intermediate: {
    ml: {
      title: "Applied Machine Learning",
      description: "Take your ML skills to the next level with practical projects and advanced techniques.",
      modules: ["Feature Engineering", "Model Evaluation", "Ensemble Methods", "ML Project Lifecycle"],
      duration: "4-6 months",
    },
    nlp: {
      title: "Advanced NLP Techniques",
      description: "Dive deeper into NLP with transformer models and practical applications.",
      modules: ["Word Embeddings", "Transformer Architecture", "Fine-tuning LLMs", "Building NLP Applications"],
      duration: "4-6 months",
    },
    generative: {
      title: "Creative AI Applications",
      description: "Learn to build and customize generative AI applications for real-world use cases.",
      modules: [
        "Advanced Prompt Engineering",
        "Fine-tuning Generative Models",
        "Multimodal Generation",
        "Building AI Products",
      ],
      duration: "3-5 months",
    },
  },
}

export default function AiPathQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [quizQuestions[currentQuestion].id]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  // Determine recommended path based on answers
  const getRecommendedPath = () => {
    const experienceLevel = answers[1] === "beginner" || answers[1] === "intermediate" ? answers[1] : "beginner"
    const interest = answers[2] || "ml"

    // @ts-ignore - We know these paths exist
    return learningPaths[experienceLevel][interest] || learningPaths.beginner.ml
  }

  const currentQuestionData = quizQuestions[currentQuestion]
  const recommendedPath = getRecommendedPath()

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="font-serif text-2xl mb-1">Find Your AI Path</h2>
        <p className="text-black/60 font-light text-sm">
          Answer a few questions to get a personalized learning journey
        </p>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-light text-black/60">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex gap-1">
                    {quizQuestions.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 w-6 rounded-full ${index === currentQuestion ? "bg-black" : "bg-black/20"}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4">{currentQuestionData.question}</h3>
                <RadioGroup
                  value={answers[currentQuestionData.id] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {currentQuestionData.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} className="border-black/30" />
                      <Label htmlFor={option.id} className="font-light">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestionData.id]}
                  className="flex items-center gap-1"
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Next" : "See Results"}{" "}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl mb-2">Your Recommended Path</h3>
              <p className="text-black/60 font-light mb-6">Based on your answers, we recommend:</p>

              <div className="bg-slate-50 rounded-lg p-6 text-left mb-6">
                <h4 className="font-medium text-xl mb-2">{recommendedPath.title}</h4>
                <p className="text-black/70 font-light mb-4">{recommendedPath.description}</p>

                <div className="mb-4">
                  <h5 className="text-sm uppercase tracking-wider text-black/40 mb-2">Key Modules</h5>
                  <ul className="space-y-1">
                    {recommendedPath.modules.map((module, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-black/30">•</span>
                        <span className="text-sm text-black/70 font-light">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-black/60 font-light">Estimated duration: {recommendedPath.duration}</div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
                <Button>Explore This Path</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
