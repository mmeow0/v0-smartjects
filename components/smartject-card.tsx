"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heart, Briefcase, Wrench, MessageSquare, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import type { SmartjectType } from "@/lib/types"

interface SmartjectCardProps {
  smartject: SmartjectType
}

export function SmartjectCard({ smartject }: SmartjectCardProps) {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [votes, setVotes] = useState(smartject.votes)

  const handleVote = (type: "believe" | "need" | "provide") => {
    if (!isAuthenticated) {
      // Redirect to login or show login modal
      return
    }

    // In a real app, this would call an API
    // Use a functional update to avoid dependencies on the current state
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }))
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{smartject.title}</CardTitle>
        </div>
        <CardDescription>{smartject.description.substring(0, 100)}...</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {smartject.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-0">
        <div className="flex justify-between w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  disabled={!isAuthenticated}
                  variant="ghost"
                  size="sm"
                  className="flex gap-2"
                  onClick={() => handleVote("believe")}
                >
                  <Heart className="h-4 w-4" />
                  <span>{votes.believe}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>I believe in this smartject</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex gap-2"
                  onClick={() => handleVote("need")}
                  disabled={!isAuthenticated || user?.accountType === "free"}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>{votes.need}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>I need this smartject (paid accounts only)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex gap-2"
                  onClick={() => handleVote("provide")}
                  disabled={!isAuthenticated || user?.accountType === "free"}
                >
                  <Wrench className="h-4 w-4" />
                  <span>{votes.provide}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>I can provide this smartject (paid accounts only)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex gap-2"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(`/smartject/${smartject.id}#comments`)
                  }}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{smartject.comments}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Button variant="outline" className="w-full" asChild>
          <Link href={`/smartject/${smartject.id}`}>
            View Details
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
