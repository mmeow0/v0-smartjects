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
    // In a real app, this would call an API
    // For demo purposes, we'll simulate a successful login
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

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("smartjects-user")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
