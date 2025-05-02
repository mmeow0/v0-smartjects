"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Paperclip,
  Send,
  ThumbsUp,
} from "lucide-react"

export default function NegotiatePage({
  params,
}: {
  params: { id: string; proposalId: string }
}) {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState("")
  const [counterOffer, setCounterOffer] = useState({
    budget: "",
    timeline: "",
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

  if (!isAuthenticated || user?.accountType !== "paid" || isLoading) {
    return null
  }

  // Mock data for the negotiation
  const negotiation = {
    matchId: params.id,
    proposalId: params.proposalId,
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
    // In a real app, we would call an API to accept the terms
    toast({
      title: "Terms accepted",
      description: "You've accepted the terms. A contract will be generated.",
    })

    // Redirect to the contract page
    router.push(`/matches/${params.id}/contract/${params.proposalId}`)
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
                  <p className="font-medium">
                    {negotiation.messages[negotiation.messages.length - 1].isCounterOffer
                      ? negotiation.messages[negotiation.messages.length - 1].counterOffer.timeline
                      : negotiation.currentProposal.timeline}
                  </p>
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
    </div>
  )
}
