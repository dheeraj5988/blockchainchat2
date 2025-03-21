"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface LoginButtonProps {
  size?: "default" | "sm" | "lg" | "icon"
}

export function LoginButton({ size = "default" }: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window !== "undefined") {
      setIsMetaMaskInstalled(!!window.ethereum)
    }
  }, [])

  async function handleLogin() {
    if (!window.ethereum) {
      window.open("https://metamask.io/download/", "_blank")
      return
    }

    setIsLoading(true)

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      const userAddress = accounts[0]
      console.log("Connected with address:", userAddress)

      // Store the address in localStorage for use in the chat
      localStorage.setItem("userAddress", userAddress)

      // Redirect to chat page
      router.push("/chat")
    } catch (error) {
      console.error("Error connecting to MetaMask:", error)
      alert("Failed to connect to MetaMask. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleLogin} disabled={isLoading} size={size} className="relative overflow-hidden group">
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
          </svg>
          {isMetaMaskInstalled ? "Connect Wallet" : "Install MetaMask"}
        </>
      )}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -translate-x-full group-hover:animate-shimmer"></span>
    </Button>
  )
}

