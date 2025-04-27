"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AffiliateLink } from "@/components/affiliate-link"

// Define proper TypeScript interfaces for the recommendation data structure
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  affiliateUrl: string;
  features: string[];
}

interface QuizRecommendations {
  [key: string]: Product[];
}

interface AllRecommendations {
  [quizId: string]: QuizRecommendations;
}

// Sample product recommendations based on quiz answers
const productRecommendations: AllRecommendations = {
  "best-laptop": {
    // General use + Budget
    "general-budget": [
      {
        id: "acer-aspire-5",
        name: "Acer Aspire 5",
        description: "Great budget laptop for everyday tasks with good battery life.",
        price: "$499.99",
        image: "/images/acer-aspire-5.jpg",
        affiliateUrl: "https://amazon.com/acer-aspire-5",
        features: ["Intel Core i3", "8GB RAM", "256GB SSD", "15.6\" Full HD", "Windows 11"],
      },
      {
        id: "lenovo-ideapad-3",
        name: "Lenovo IdeaPad 3",
        description: "Reliable budget laptop with solid performance for basic tasks.",
        price: "$379.99",
        image: "/images/lenovo-ideapad-3.jpg",
        affiliateUrl: "https://amazon.com/lenovo-ideapad-3",
        features: ["AMD Ryzen 3", "8GB RAM", "256GB SSD", "14\" HD", "Windows 11"],
      },
    ],
    // Professional + High-end + macOS
    "professional-high-end-macos": [
      {
        id: "macbook-pro-14",
        name: "MacBook Pro 14\"",
        description: "Powerful laptop for professionals with exceptional performance and display.",
        price: "$1,999.00",
        image: "/images/macbook-pro-14.jpg",
        affiliateUrl: "https://amazon.com/macbook-pro-14",
        features: ["Apple M2 Pro", "16GB RAM", "512GB SSD", "14\" Liquid Retina XDR", "macOS"],
      },
      {
        id: "macbook-air-m2",
        name: "MacBook Air M2",
        description: "Ultra-thin and light with great performance for professional work.",
        price: "$1,199.00",
        image: "/images/macbook-air-m2.jpg",
        affiliateUrl: "https://amazon.com/macbook-air-m2",
        features: ["Apple M2", "8GB RAM", "256GB SSD", "13.6\" Liquid Retina", "macOS"],
      },
    ],
    // Gaming + Premium
    "gaming-premium": [
      {
        id: "asus-rog-strix-g16",
        name: "ASUS ROG Strix G16",
        description: "High-performance gaming laptop with advanced cooling and stunning display.",
        price: "$1,899.99",
        image: "/images/asus-rog-strix-g16.jpg",
        affiliateUrl: "https://amazon.com/asus-rog-strix-g16",
        features: ["Intel Core i9", "32GB RAM", "1TB SSD", "RTX 4070", "16\" QHD 240Hz", "Windows 11"],
      },
      {
        id: "razer-blade-15",
        name: "Razer Blade 15",
        description: "Premium gaming laptop with sleek design and powerful performance.",
        price: "$2,499.99",
        image: "/images/razer-blade-15.jpg",
        affiliateUrl: "https://amazon.com/razer-blade-15",
        features: ["Intel Core i7", "16GB RAM", "1TB SSD", "RTX 4060", "15.6\" QHD 240Hz", "Windows 11"],
      },
    ],
    // Default recommendations
    "default": [
      {
        id: "dell-xps-13",
        name: "Dell XPS 13",
        description: "Compact and powerful laptop with excellent build quality.",
        price: "$999.99",
        image: "/images/dell-xps-13.jpg",
        affiliateUrl: "https://amazon.com/dell-xps-13",
        features: ["Intel Core i5", "8GB RAM", "512GB SSD", "13.4\" Full HD+", "Windows 11"],
      },
      {
        id: "hp-envy-x360",
        name: "HP Envy x360",
        description: "Versatile 2-in-1 laptop with great performance and battery life.",
        price: "$849.99",
        image: "/images/hp-envy-x360.jpg",
        affiliateUrl: "https://amazon.com/hp-envy-x360",
        features: ["AMD Ryzen 5", "16GB RAM", "512GB SSD", "15.6\" Full HD Touch", "Windows 11"],
      },
    ],
  },
  // Add more quiz results here
}

// Function to determine which recommendations to show based on answers
function getRecommendationKey(quizId: string, answers: Record<string, string>): string {
  if (quizId === "best-laptop") {
    const usage = answers.usage || ""
    const budget = answers.budget || ""
    const os = answers.os || ""
    
    if (usage === "general" && budget === "budget") {
      return "general-budget"
    }
    
    if (usage === "professional" && budget === "high-end" && os === "macos") {
      return "professional-high-end-macos"
    }
    
    if (usage === "gaming" && budget === "premium") {
      return "gaming-premium"
    }
  }
  
  return "default"
}

export default function ResultsPage({ params }: { params: Promise<{ quizId: string }> }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const { quizId } = unwrappedParams;
  
  const searchParams = useSearchParams()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const answersObj: Record<string, string> = {}
    searchParams.forEach((value, key) => {
      answersObj[key] = value
    })
    setAnswers(answersObj)
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [searchParams])
  
  const recommendationKey = getRecommendationKey(quizId, answers)
  const quizRecommendations = productRecommendations[quizId] || {}
  const recommendations = quizRecommendations[recommendationKey] || []
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        {/* <SiteHeader /> */}
        <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-6">Analyzing Your Answers...</h1>
            <div className="w-full max-w-md mx-auto h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-2 bg-primary rounded-full animate-pulse" style={{ width: "100%" }} />
            </div>
            <p className="mt-4 text-muted-foreground">Finding the perfect products for you...</p>
          </div>
        </main>
        {/* <SiteFooter /> */}
      </div>
    )
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center">Your Personalized Recommendations</h1>
          <p className="text-center text-muted-foreground mt-2 mb-8">
            Based on your answers, we've found the perfect products for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card rounded-lg border shadow-sm overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <span className="text-lg font-semibold text-primary">{product.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-1 text-sm text-muted-foreground">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  
                  <AffiliateLink
                    url={product.affiliateUrl}
                    productId={product.id}
                    quizId={quizId}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Best Price
                    </motion.button>
                  </AffiliateLink>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Why We Recommend These Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our recommendations are based on your specific needs and preferences. We've carefully selected these products to provide the best value and performance for your requirements.
            </p>
            
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.history.back()}
                className="py-2 px-4 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors"
              >
                Take Quiz Again
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}