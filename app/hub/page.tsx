"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SmartjectCard } from "@/components/smartject-card"
import { mockSmartjects } from "@/lib/mock-data"

// Filter options
const industries = ["Supply Chain", "Manufacturing", "Finance", "Customer Support"]
const technologies = ["AI", "ML", "NLP", "IoT"]
const functions = ["Forecasting", "Optimization", "Automation"]

export default function SmartjectsHubPage() {
  const [query, setQuery] = useState("")
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([])

  const handleToggle = (value: string, selected: string[], setSelected: (v: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  const filteredSmartjects = mockSmartjects.filter((s) => {
    const matchesQuery =
      s.title?.toLowerCase().includes(query.toLowerCase()) || s.description?.toLowerCase().includes(query.toLowerCase())

    const matchesIndustries =
      selectedIndustries.length === 0 || selectedIndustries.some((i) => s.industries?.includes(i))

    const matchesTechnologies =
      selectedTechnologies.length === 0 || selectedTechnologies.some((t) => s.technologies?.includes(t))

    const matchesFunctions = selectedFunctions.length === 0 || selectedFunctions.some((f) => s.functions?.includes(f))

    return matchesQuery && matchesIndustries && matchesTechnologies && matchesFunctions
  })

  // Sort smartjects for different tabs
  const recentSmartjects = [...filteredSmartjects].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  const mostNeededSmartjects = [...filteredSmartjects].sort((a, b) => b.votes.need - a.votes.need)

  const mostProvidedSmartjects = [...filteredSmartjects].sort((a, b) => b.votes.provide - a.votes.provide)

  const mostBelievedSmartjects = [...filteredSmartjects].sort((a, b) => b.votes.believe - a.votes.believe)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Smartjects Hub</h1>
        <p className="text-muted-foreground mb-4">Explore all available AI implementation projects</p>

        {/* 🔍 Unified Search */}
        <Card className="p-6 space-y-4 bg-muted/50">
          <Input placeholder="Search smartjects..." value={query} onChange={(e) => setQuery(e.target.value)} />

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Industries</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustries.includes(industry) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleToggle(industry, selectedIndustries, setSelectedIndustries)}
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleToggle(tech, selectedTechnologies, setSelectedTechnologies)}
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Functions</p>
              <div className="flex flex-wrap gap-2">
                {functions.map((func) => (
                  <Button
                    key={func}
                    variant={selectedFunctions.includes(func) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleToggle(func, selectedFunctions, setSelectedFunctions)}
                  >
                    {func}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="recent">
        <TabsList className="mb-6">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="most-needed">Most Needed</TabsTrigger>
          <TabsTrigger value="most-provided">Most Provided</TabsTrigger>
          <TabsTrigger value="most-believed">Most Believed</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSmartjects.map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="most-needed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mostNeededSmartjects.map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="most-provided" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mostProvidedSmartjects.map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="most-believed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mostBelievedSmartjects.map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
