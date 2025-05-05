"use client"

import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Paperclip,
  Plus,
  Send,
  ThumbsUp,
  Trash2,
  X,
  CheckCircle2,
  Circle,
  ListChecks,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { DatePicker } from "@/components/ui/date-picker"
import { Badge } from "@/components/ui/badge"

// Define deliverable type
interface Deliverable {
  id: string
  description: string
  completed: boolean
}

// Update milestone type to include deliverables
interface Milestone {
  id: string
  name: string
  description: string
  percentage: number
  amount: string
  dueDate: string
  deliverables: Deliverable[]
}

// Define mock data outside the component to prevent recreation on each render
const getMockData = (matchId: string, proposalId: string) => ({
  matchId,
  proposalId,
  smartjectTitle: "AI-Powered Supply Chain Optimization",
  provider: {
    id: "user-101",
    name: "Tech Solutions Inc.",
    avatar: "",
    rating: 4.8,
  },
  needer: {
    id: "user-201",
    name: "Global Logistics Corp",
    avatar: "",
    rating: 4.6,
  },
  currentProposal: {
    budget: "$15,000",
    timeline: "3 months",
    scope:
      "The project will include data integration from existing systems, machine learning model development, dashboard creation, and staff training.",
    deliverables: [
      "Data integration framework",
      "Machine learning prediction model",
      "Real-time monitoring dashboard",
      "Documentation and training materials",
    ],
  },
  messages: [
    {
      id: "msg-1",
      sender: "provider",
      senderName: "Tech Solutions Inc.",
      content:
        "Thank you for considering our proposal. We're excited about the possibility of working together on this project.",
      timestamp: "2023-12-06T10:30:00",
      isCounterOffer: false,
    },
    {
      id: "msg-2",
      sender: "needer",
      senderName: "Global Logistics Corp",
      content: "We like your approach but we're wondering if the timeline could be shortened to 2.5 months?",
      timestamp: "2023-12-06T14:15:00",
      isCounterOffer: true,
      counterOffer: {
        budget: "$15,000",
        timeline: "2.5 months",
      },
    },
    {
      id: "msg-3",
      sender: "provider",
      senderName: "Tech Solutions Inc.",
      content:
        "We could potentially shorten the timeline to 2.5 months, but it would require additional resources which would increase the budget to $17,500.",
      timestamp: "2023-12-07T09:45:00",
      isCounterOffer: true,
      counterOffer: {
        budget: "$17,500",
        timeline: "2.5 months",
      },
    },
  ],
})

export default function NegotiatePage({
  params,
}: {
  params: { id: string; proposalId: string }
}) {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const { toast } = useToast()

  // Use useMemo to prevent recreation of the negotiation object on each render
  const negotiation = useMemo(() => getMockData(params.id, params.proposalId), [params.id, params.proposalId])

  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState("")
  const [counterOffer, setCounterOffer] = useState({
    budget: "",
    timeline: "",
  })
  const [useMilestones, setUseMilestones] = useState(false)
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [showMilestoneDialog, setShowMilestoneDialog] = useState(false)
  const [currentMilestone, setCurrentMilestone] = useState<Milestone>({
    id: "",
    name: "",
    description: "",
    percentage: 0,
    amount: "",
    dueDate: "",
    deliverables: [],
  })
  const [editingMilestoneId, setEditingMilestoneId] = useState<string | null>(null)
  const [totalPercentage, setTotalPercentage] = useState(0)
  const [newDeliverable, setNewDeliverable] = useState("")

  // Extract the timeline string once to avoid recalculations
  const currentTimelineStr = useMemo(() => {
    const lastMessage = negotiation.messages[negotiation.messages.length - 1]
    return lastMessage.isCounterOffer ? lastMessage.counterOffer.timeline : negotiation.currentProposal.timeline
  }, [negotiation.messages, negotiation.currentProposal.timeline])

  // Initialize project timeline dates with default values
  const [projectStartDate, setProjectStartDate] = useState<Date>(() => new Date())
  const [projectEndDate, setProjectEndDate] = useState<Date>(() => {
    const endDate = new Date()
    endDate.setMonth(endDate.getMonth() + 3) // Default 3 months
    return endDate
  })

  // Redirect if not authenticated or not a paid user
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    } else if (user?.accountType !== "paid") {
      router.push("/upgrade")
    } else {
      // Simulate loading data
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isAuthenticated, router, user])

  // Calculate total percentage whenever milestones change
  useEffect(() => {
    const total = milestones.reduce((sum, milestone) => sum + milestone.percentage, 0)
    setTotalPercentage(total)
  }, [milestones])

  // Calculate project timeline based on current proposal - only run once on initial render
  useEffect(() => {
    // Set project start date to today
    const start = new Date()

    // Extract number of months from timeline string (e.g., "3 months" -> 3)
    const durationMatch = currentTimelineStr.match(/(\d+(\.\d+)?)/)
    const durationMonths = durationMatch ? Number.parseFloat(durationMatch[1]) : 3

    // Calculate end date
    const end = new Date(start)
    end.setMonth(end.getMonth() + Math.floor(durationMonths))
    // Handle partial months
    const remainingDays = Math.round((durationMonths % 1) * 30)
    end.setDate(end.getDate() + remainingDays)

    setProjectStartDate(start)
    setProjectEndDate(end)
    // Only run this effect once on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isAuthenticated || user?.accountType !== "paid" || isLoading) {
    return null
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    // In a real app, we would call an API to send the message
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    })

    // Clear the message input
    setMessage("")
  }

  const handleSendCounterOffer = () => {
    if (!counterOffer.budget && !counterOffer.timeline) {
      toast({
        title: "Missing information",
        description: "Please provide at least one counter offer term.",
        variant: "destructive",
      })
      return
    }

    // In a real app, we would call an API to send the counter offer
    toast({
      title: "Counter offer sent",
      description: "Your counter offer has been sent successfully.",
    })

    // Clear the counter offer inputs
    setCounterOffer({
      budget: "",
      timeline: "",
    })
  }

  const handleAcceptTerms = () => {
    // Validate milestones if they're being used
    if (useMilestones) {
      if (milestones.length === 0) {
        toast({
          title: "No milestones defined",
          description: "Please add at least one milestone before accepting terms.",
          variant: "destructive",
        })
        return
      }

      if (totalPercentage !== 100) {
        toast({
          title: "Invalid milestone percentages",
          description: "The total percentage of all milestones must equal 100%.",
          variant: "destructive",
        })
        return
      }
    }

    // In a real app, we would call an API to accept the terms
    toast({
      title: "Terms accepted",
      description: "You've accepted the terms. A contract will be generated.",
    })

    // Redirect to the contract page
    router.push(`/matches/${params.id}/contract/${params.proposalId}`)
  }

  const openAddMilestoneDialog = () => {
    setEditingMilestoneId(null)
    setCurrentMilestone({
      id: Date.now().toString(),
      name: "",
      description: "",
      percentage: 0,
      amount: "",
      dueDate: "",
      deliverables: [],
    })
    setNewDeliverable("")
    setShowMilestoneDialog(true)
  }

  const openEditMilestoneDialog = (milestone: Milestone) => {
    setEditingMilestoneId(milestone.id)
    setCurrentMilestone({ ...milestone })
    setNewDeliverable("")
    setShowMilestoneDialog(true)
  }

  // Calculate suggested due date based on percentage
  const calculateSuggestedDueDate = (percentage: number): Date => {
    const projectDuration = projectEndDate.getTime() - projectStartDate.getTime()
    const daysFromStart = (projectDuration * (percentage / 100)) / (1000 * 60 * 60 * 24)

    const suggestedDate = new Date(projectStartDate)
    suggestedDate.setDate(suggestedDate.getDate() + Math.round(daysFromStart))

    return suggestedDate
  }

  const handleSaveMilestone = () => {
    // Validate milestone data
    if (!currentMilestone.name.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a name for the milestone.",
        variant: "destructive",
      })
      return
    }

    if (currentMilestone.percentage <= 0) {
      toast({
        title: "Invalid percentage",
        description: "Percentage must be greater than 0.",
        variant: "destructive",
      })
      return
    }

    if (!currentMilestone.dueDate) {
      toast({
        title: "Missing information",
        description: "Please provide a due date for the milestone.",
        variant: "destructive",
      })
      return
    }

    // Check if adding/updating this milestone would exceed 100%
    const otherMilestonesTotal = milestones
      .filter((m) => m.id !== currentMilestone.id)
      .reduce((sum, m) => sum + m.percentage, 0)

    if (otherMilestonesTotal + currentMilestone.percentage > 100) {
      toast({
        title: "Percentage too high",
        description: "The total percentage of all milestones cannot exceed 100%.",
        variant: "destructive",
      })
      return
    }

    if (editingMilestoneId) {
      // Update existing milestone
      setMilestones(milestones.map((m) => (m.id === editingMilestoneId ? currentMilestone : m)))
      toast({
        title: "Milestone updated",
        description: "The milestone has been updated successfully.",
      })
    } else {
      // Add new milestone
      setMilestones([...milestones, currentMilestone])
      toast({
        title: "Milestone added",
        description: "The milestone has been added successfully.",
      })
    }

    setShowMilestoneDialog(false)
  }

  const handleDeleteMilestone = (id: string) => {
    setMilestones(milestones.filter((m) => m.id !== id))
    toast({
      title: "Milestone deleted",
      description: "The milestone has been deleted successfully.",
    })
  }

  const formatCurrency = (value: string) => {
    // Remove any non-digit characters
    const numericValue = value.replace(/[^0-9]/g, "")

    // Format as currency
    if (numericValue) {
      return `$${Number.parseInt(numericValue).toLocaleString()}`
    }
    return ""
  }

  const handleMilestoneAmountChange = (value: string) => {
    setCurrentMilestone({
      ...currentMilestone,
      amount: formatCurrency(value),
    })
  }

  const handleMilestoneDateChange = (date: Date | undefined) => {
    if (date) {
      setCurrentMilestone({
        ...currentMilestone,
        dueDate: date.toISOString(),
      })
    }
  }

  // Update milestone percentage and suggest a due date
  const handleMilestonePercentageChange = (percentage: number) => {
    const newPercentage = Math.max(0, Math.min(100, percentage))

    // Calculate suggested due date based on percentage
    const suggestedDate = calculateSuggestedDueDate(newPercentage)

    setCurrentMilestone({
      ...currentMilestone,
      percentage: newPercentage,
      dueDate: currentMilestone.dueDate || suggestedDate.toISOString(),
    })
  }

  // Add a new deliverable to the current milestone
  const handleAddDeliverable = () => {
    if (!newDeliverable.trim()) return

    const newDeliverableItem: Deliverable = {
      id: Date.now().toString(),
      description: newDeliverable.trim(),
      completed: false,
    }

    setCurrentMilestone({
      ...currentMilestone,
      deliverables: [...currentMilestone.deliverables, newDeliverableItem],
    })

    setNewDeliverable("")
  }

  // Remove a deliverable from the current milestone
  const handleRemoveDeliverable = (id: string) => {
    setCurrentMilestone({
      ...currentMilestone,
      deliverables: currentMilestone.deliverables.filter((d) => d.id !== id),
    })
  }

  // Toggle the completed status of a deliverable
  const handleToggleDeliverable = (id: string) => {
    setCurrentMilestone({
      ...currentMilestone,
      deliverables: currentMilestone.deliverables.map((d) => (d.id === id ? { ...d, completed: !d.completed } : d)),
    })
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Negotiate Terms</h1>
          <p className="text-muted-foreground">
            For smartject: <span className="font-medium">{negotiation.smartjectTitle}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Negotiation Chat</CardTitle>
              <CardDescription>Discuss terms and conditions with the other party</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[500px] overflow-y-auto">
              <div className="space-y-6">
                {negotiation.messages.map((msg) => {
                  const isCurrentUser = msg.sender === (user?.id === negotiation.provider.id ? "provider" : "needer")
                  return (
                    <div key={msg.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex max-w-[80%] ${
                          isCurrentUser ? "flex-row-reverse" : "flex-row"
                        } items-start gap-2`}
                      >
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarFallback>{msg.senderName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`rounded-lg p-3 ${
                            isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium">{msg.senderName}</span>
                            <span className="text-xs opacity-70">
                              {new Date(msg.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          <p>{msg.content}</p>
                          {msg.isCounterOffer && (
                            <div className="mt-2 p-2 rounded bg-background/20">
                              <p className="text-xs font-medium mb-1">Counter Offer:</p>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <span className="text-xs opacity-70">Budget:</span>
                                  <p className="text-sm font-medium">{msg.counterOffer.budget}</p>
                                </div>
                                <div>
                                  <span className="text-xs opacity-70">Timeline:</span>
                                  <p className="text-sm font-medium">{msg.counterOffer.timeline}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="w-full">
                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between mt-2">
                  <Button variant="outline" size="sm">
                    <Paperclip className="h-4 w-4 mr-2" />
                    Attach File
                  </Button>
                  <Button size="sm" onClick={handleSendMessage} disabled={!message.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="w-full">
                <h3 className="text-sm font-medium mb-2">Send Counter Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="budget">Budget</Label>
                    <Input
                      id="budget"
                      placeholder="e.g. $16,000"
                      value={counterOffer.budget}
                      onChange={(e) => setCounterOffer({ ...counterOffer, budget: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Input
                      id="timeline"
                      placeholder="e.g. 2.5 months"
                      value={counterOffer.timeline}
                      onChange={(e) => setCounterOffer({ ...counterOffer, timeline: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={handleSendCounterOffer} className="w-full">
                  Send Counter Offer
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Current Terms</CardTitle>
              <CardDescription>Latest agreed upon terms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <DollarSign className="h-4 w-4 mr-1" /> Budget
                  </div>
                  <p className="font-medium">
                    {negotiation.messages[negotiation.messages.length - 1].isCounterOffer
                      ? negotiation.messages[negotiation.messages.length - 1].counterOffer.budget
                      : negotiation.currentProposal.budget}
                  </p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-1" /> Timeline
                  </div>
                  <p className="font-medium">{currentTimelineStr}</p>
                </div>
                <Separator />
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <FileText className="h-4 w-4 mr-1" /> Scope
                  </div>
                  <p className="text-sm">{negotiation.currentProposal.scope}</p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Check className="h-4 w-4 mr-1" /> Deliverables
                  </div>
                  <ul className="text-sm list-disc pl-5">
                    {negotiation.currentProposal.deliverables.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleAcceptTerms}>
                <ThumbsUp className="h-4 w-4 mr-2" />
                Accept Current Terms
              </Button>
            </CardFooter>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Payment Milestones</CardTitle>
              <CardDescription>Define payment schedule for the project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="use-milestones" className="flex items-center gap-2">
                    <span>Use payment milestones</span>
                    {useMilestones && totalPercentage !== 100 && (
                      <span className="text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Total must be 100%
                      </span>
                    )}
                  </Label>
                  <Switch id="use-milestones" checked={useMilestones} onCheckedChange={setUseMilestones} />
                </div>

                {useMilestones && (
                  <>
                    <div className="border rounded-md p-3 bg-muted/30">
                      <p className="text-sm">
                        Define payment milestones to break down the project into manageable phases. Each milestone
                        should have a percentage of the total budget.
                      </p>
                      <div className="mt-2 text-sm flex justify-between">
                        <span>
                          Current total: <strong>{totalPercentage}%</strong>
                        </span>
                        <span>
                          Remaining: <strong>{100 - totalPercentage}%</strong>
                        </span>
                      </div>
                    </div>

                    {milestones.length > 0 ? (
                      <div className="space-y-2">
                        {milestones.map((milestone) => (
                          <div key={milestone.id} className="border rounded-md p-3 flex justify-between items-start">
                            <div className="w-full">
                              <div className="font-medium">{milestone.name}</div>
                              <div className="text-sm text-muted-foreground">{milestone.description}</div>
                              <div className="mt-1 flex gap-3 text-sm">
                                <span>{milestone.percentage}%</span>
                                <span>{milestone.amount}</span>
                                <span>Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                              </div>

                              {/* Display deliverables if any */}
                              {milestone.deliverables && milestone.deliverables.length > 0 && (
                                <div className="mt-2 pt-2 border-t">
                                  <div className="flex items-center text-xs text-muted-foreground mb-1">
                                    <ListChecks className="h-3 w-3 mr-1" /> Deliverables
                                  </div>
                                  <ul className="text-sm space-y-1 mt-1">
                                    {milestone.deliverables.map((deliverable) => (
                                      <li key={deliverable.id} className="flex items-start gap-2">
                                        <span className="mt-0.5">
                                          {deliverable.completed ? (
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                          ) : (
                                            <Circle className="h-4 w-4 text-muted-foreground" />
                                          )}
                                        </span>
                                        <span className="flex-1">{deliverable.description}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                            <div className="flex gap-1 ml-2">
                              <Button variant="ghost" size="icon" onClick={() => openEditMilestoneDialog(milestone)}>
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleDeleteMilestone(milestone.id)}>
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="border border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center text-muted-foreground">
                        <FileText className="h-8 w-8 mb-2" />
                        <p>No milestones defined yet</p>
                        <p className="text-sm">Add milestones to define the payment schedule</p>
                      </div>
                    )}

                    <Button variant="outline" className="w-full" onClick={openAddMilestoneDialog}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Milestone
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Negotiation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Started</span>
                  </div>
                  <span className="text-sm">{new Date(negotiation.messages[0].timestamp).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Messages</span>
                  </div>
                  <span className="text-sm">{negotiation.messages.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Last Activity</span>
                  </div>
                  <span className="text-sm">
                    {new Date(negotiation.messages[negotiation.messages.length - 1].timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Milestone Dialog */}
      <Dialog open={showMilestoneDialog} onOpenChange={setShowMilestoneDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingMilestoneId ? "Edit Milestone" : "Add Milestone"}</DialogTitle>
            <DialogDescription>
              {editingMilestoneId ? "Update the details of this milestone" : "Define a new milestone for the project"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="milestone-name">Milestone Name</Label>
              <Input
                id="milestone-name"
                placeholder="e.g., Project Kickoff, MVP Delivery"
                value={currentMilestone.name}
                onChange={(e) => setCurrentMilestone({ ...currentMilestone, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestone-description">Description</Label>
              <Textarea
                id="milestone-description"
                placeholder="Describe what will be delivered in this milestone"
                value={currentMilestone.description}
                onChange={(e) => setCurrentMilestone({ ...currentMilestone, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="milestone-percentage">Percentage (%)</Label>
                <Input
                  id="milestone-percentage"
                  type="number"
                  min="1"
                  max="100"
                  placeholder="e.g., 25"
                  value={currentMilestone.percentage || ""}
                  onChange={(e) => handleMilestonePercentageChange(Number.parseInt(e.target.value) || 0)}
                />
                <p className="text-xs text-muted-foreground">Percentage of total budget</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="milestone-amount">Amount</Label>
                <Input
                  id="milestone-amount"
                  placeholder="e.g., $5,000"
                  value={currentMilestone.amount}
                  onChange={(e) => handleMilestoneAmountChange(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Payment amount for this milestone</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestone-due-date">Due Date</Label>
              <DatePicker
                date={currentMilestone.dueDate ? new Date(currentMilestone.dueDate) : undefined}
                onSelect={handleMilestoneDateChange}
              />

              {/* Timeline position indicator */}
              {currentMilestone.dueDate && (
                <div className="mt-2 pt-2 border-t">
                  <p className="text-xs text-muted-foreground mb-1">Position in project timeline:</p>
                  <div className="relative h-1 bg-muted rounded-full">
                    {/* Project progress indicator */}
                    <div className="absolute top-0 left-0 h-1 bg-primary/30 rounded-l-full" style={{ width: "100%" }} />

                    {/* Milestone position */}
                    {(() => {
                      const milestoneDate = new Date(currentMilestone.dueDate)
                      const position = Math.max(
                        0,
                        Math.min(
                          ((milestoneDate.getTime() - projectStartDate.getTime()) /
                            (projectEndDate.getTime() - projectStartDate.getTime())) *
                            100,
                          100,
                        ),
                      )

                      return (
                        <div
                          className="absolute top-0 w-2 h-2 bg-primary rounded-full -translate-x-1 -translate-y-0.5"
                          style={{ left: `${position}%` }}
                        />
                      )
                    })()}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Start</span>
                    <span>End</span>
                  </div>
                </div>
              )}
            </div>

            {/* Deliverables Section */}
            <div className="space-y-2 pt-2 border-t">
              <Label className="flex items-center gap-2">
                <ListChecks className="h-4 w-4" /> Deliverables
                <Badge variant="outline" className="ml-2">
                  {currentMilestone.deliverables.length}
                </Badge>
              </Label>

              {currentMilestone.deliverables.length > 0 ? (
                <div className="border rounded-md p-2 space-y-2 max-h-[200px] overflow-y-auto">
                  {currentMilestone.deliverables.map((deliverable) => (
                    <div key={deliverable.id} className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleToggleDeliverable(deliverable.id)}
                      >
                        {deliverable.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Circle className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle completion</span>
                      </Button>
                      <span className="flex-1 text-sm">{deliverable.description}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-destructive"
                        onClick={() => handleRemoveDeliverable(deliverable.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed rounded-md p-4 text-center text-muted-foreground">
                  <p className="text-sm">No deliverables added yet</p>
                </div>
              )}

              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="Add a deliverable item..."
                  value={newDeliverable}
                  onChange={(e) => setNewDeliverable(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newDeliverable.trim()) {
                      e.preventDefault()
                      handleAddDeliverable()
                    }
                  }}
                />
                <Button type="button" size="sm" onClick={handleAddDeliverable} disabled={!newDeliverable.trim()}>
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Add</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Add specific items that will be delivered as part of this milestone
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowMilestoneDialog(false)}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSaveMilestone}>
              <Check className="h-4 w-4 mr-2" />
              {editingMilestoneId ? "Update Milestone" : "Add Milestone"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
