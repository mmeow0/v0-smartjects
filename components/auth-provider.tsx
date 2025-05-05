"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type UserType = {
  id: string
  name: string
  email: string
  accountType: "free" | "paid"
  avatar?: string
}

type AuthContextType = {
  user: UserType | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  upgradeAccount: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check for existing session on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("smartjects-user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error("Error loading user from localStorage:", error)
      // Ensure we don't leave the app in a broken state
      setUser(null)
      setIsAuthenticated(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Check for specific test users
    if (email === "paid_account@mail.ru" && password === "Test@1234") {
      const paidUser: UserType = {
        id: "user-paid",
        name: "Paid User",
        email,
        accountType: "paid",
        avatar: "/placeholder.svg?height=40&width=40",
      }
      setUser(paidUser)
      setIsAuthenticated(true)
      localStorage.setItem("smartjects-user", JSON.stringify(paidUser))
      return
    }

    if (email === "non_paid_account@mail.ru" && password === "Test@1234") {
      const freemiumUser: UserType = {
        id: "user-free",
        name: "Free User",
        email,
        accountType: "free",
        avatar: "/placeholder.svg?height=40&width=40",
      }
      setUser(freemiumUser)
      setIsAuthenticated(true)
      localStorage.setItem("smartjects-user", JSON.stringify(freemiumUser))
      return
    }

    // For any other email/password, create a default user (for demo purposes)
    const mockUser: UserType = {
      id: "user-1",
      name: "Demo User",
      email,
      accountType: "free",
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("smartjects-user", JSON.stringify(mockUser))
  }

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would call an API
    // For demo purposes, we'll simulate a successful registration
    const mockUser: UserType = {
      id: "user-" + Date.now(),
      name,
      email,
      accountType: "free",
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("smartjects-user", JSON.stringify(mockUser))
  }

  const upgradeAccount = async () => {
    // In a real app, this would call an API to process payment and upgrade the account
    // For demo purposes, we'll simulate a successful upgrade
    if (user) {
      const upgradedUser: UserType = {
        ...user,
        accountType: "paid",
      }

      setUser(upgradedUser)
      localStorage.setItem("smartjects-user", JSON.stringify(upgradedUser))

      // Simulate API delay
      return new Promise<void>((resolve) => setTimeout(resolve, 1500))
    }

    return Promise.reject(new Error("User not authenticated"))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("smartjects-user")

    // Force a page reload to ensure all components re-render
    window.location.href = "/"
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, upgradeAccount }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
