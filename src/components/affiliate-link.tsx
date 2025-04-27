"use client"

import { useCallback } from "react"
import Link from "next/link"
import React from "react"

interface AffiliateLinkProps {
  url: string
  productId: string
  quizId: string
  children: React.ReactNode
}

export function AffiliateLink({ url, productId, quizId, children }: AffiliateLinkProps) {
  const trackClick = useCallback(async () => {
    try {
      // Track the affiliate link click
      await fetch("/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quizId,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (error) {
      // Silent fail - don't block the user from visiting the affiliate link
      console.error("Error tracking affiliate click:", error)
    }
  }, [productId, quizId])

  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer sponsored"
      onClick={trackClick}
    >
      {children}    
    </Link>
  )
}