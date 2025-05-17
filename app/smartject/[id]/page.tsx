"use client"

import Link from "next/link"
import Image from "next/image"

import { useState, useEffect, useRef, use, FormEvent } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Heart,
  Briefcase,
  Wrench,
  MessageSquare,
  Share2,
  Calendar,
  DollarSign,
  Target,
  Users,
  Lightbulb,
  Cpu,
  Zap,
  Building,
  Factory,
  BriefcaseIcon,
  LinkIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/components/auth-provider"
import { mockSmartjects } from "@/lib/mock-data"

export default function SmartjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const [comment, setComment] = useState("")

  const commentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if the URL has a hash fragment
    if (typeof window !== "undefined" && window.location.hash === "#comments") {
      // Scroll to the comments section
      setTimeout(() => {
        commentsRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 500) // Small delay to ensure the page is fully loaded
    }
  }, [])

  // In a real app, we would fetch the smartject from an API
  const smartject = mockSmartjects.find((s) => s.id === id) || mockSmartjects[0]

  // Mock proposals data
  const needProposals = [
    {
      id: "need-1",
      userId: "user-201",
      userName: "Global Logistics Corp",
      budget: "$15,000",
      timeline: "3 months",
      status: "open",
      createdAt: "2023-12-01",
    },
    {
      id: "need-2",
      userId: "user-202",
      userName: "Supply Chain Solutions",
      budget: "$18,000",
      timeline: "2.5 months",
      status: "open",
      createdAt: "2023-12-05",
    },
  ]

  const provideProposals = [
    {
      id: "provide-1",
      userId: "user-101",
      userName: "Tech Solutions Inc.",
      budget: "$16,500",
      timeline: "3.5 months",
      status: "open",
      createdAt: "2023-11-28",
    },
    {
      id: "provide-2",
      userId: "user-102",
      userName: "AI Innovations",
      budget: "$14,000",
      timeline: "4 months",
      status: "open",
      createdAt: "2023-12-02",
    },
    {
      id: "provide-3",
      userId: "user-103",
      userName: "DataSmart Systems",
      budget: "$19,000",
      timeline: "2 months",
      status: "open",
      createdAt: "2023-12-07",
    },
  ]

  const handleBack = () => {
    router.back()
  }

  const handleVote = (type: "believe" | "need" | "provide") => {
    // In a real app, this would call an API
    console.log(`Voted ${type} for smartject ${smartject.id}`)
  }

  const handleSubmitComment = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, this would call an API
    console.log(`Submitted comment: ${comment}`)
    setComment("")
  }

  const handleCreateProposal = () => {
    router.push(`/proposals/create?smartjectId=${smartject.id}`)
  }

  const handleRespondToProposal = (proposalId: string) => {
    router.push(`/proposals/${proposalId}`)
  }

  const handleNegotiate = (proposalId: string) => {
    // In a real app, this would navigate to a negotiation page
    router.push(`/matches/new/negotiate/${proposalId}`)
  }

  // Mock research papers
  const researchPapers = [
    {
      title: "Advancements in AI for Business Process Optimization",
      authors: "Smith, J., Johnson, A.",
      journal: "Journal of AI Research",
      year: 2023,
      url: "#",
    },
    {
      title: "Machine Learning Applications in Industry 4.0",
      authors: "Chen, L., Williams, P.",
      journal: "International Journal of Intelligent Systems",
      year: 2022,
      url: "#",
    },
  ]

  // Mock comments
  const comments = [
    {
      id: "comment-1",
      user: {
        name: "Alice Johnson",
        avatar: "",
      },
      content:
        "This smartject has great potential for manufacturing industries. I've seen similar implementations reduce costs by up to 30%.",
      createdAt: "2023-12-10",
    },
    {
      id: "comment-2",
      user: {
        name: "Bob Smith",
        avatar: "",
      },
      content:
        "I'm interested in how this could be adapted for smaller businesses. Would the implementation cost be prohibitive?",
      createdAt: "2023-12-12",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <Button variant="ghost" onClick={handleBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {smartject.businessFunctions.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-2xl">{smartject.title}</CardTitle>
              <CardDescription>Created on {new Date(smartject.createdAt).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Featured Image */}
              {smartject.image && (
                <div className="mb-6 relative h-64 w-full overflow-hidden rounded-md">
                  <Image
                    src={smartject.image || "/placeholder.svg"}
                    alt={smartject.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Tabs for different content sections */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="details" className="flex-1">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="need" className="flex-1">
                    I Need ({needProposals.length})
                  </TabsTrigger>
                  <TabsTrigger value="provide" className="flex-1">
                    I Provide ({provideProposals.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <div className="space-y-6">
                    {/* Mission */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-primary" />
                        Mission
                      </h3>
                      <p className="text-muted-foreground">{smartject.mission}</p>
                    </div>

                    <Separator />

                    {/* Problem it Solves */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-amber-500" />
                        Problem it Solves
                      </h3>
                      <p className="text-muted-foreground">{smartject.problematics}</p>
                    </div>

                    <Separator />

                    {/* Scope */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-blue-500" />
                        Scope
                      </h3>
                      <p className="text-muted-foreground">{smartject.scope}</p>
                    </div>

                    <Separator />

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-indigo-500" />
                        Target Audience
                      </h3>
                      <p className="text-muted-foreground">{smartject.audience}</p>
                    </div>

                    <Separator />

                    {/* How it Works */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Cpu className="h-5 w-5 text-green-500" />
                        How it Works
                      </h3>
                      <p className="text-muted-foreground">{smartject.howItWorks}</p>
                    </div>

                    <Separator />

                    {/* System Architecture */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Cpu className="h-5 w-5 text-purple-500" />
                        High-Level System Architecture
                      </h3>
                      <p className="text-muted-foreground">{smartject.architecture}</p>
                    </div>

                    <Separator />

                    {/* Key Differentiators */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        Key Differentiators and Innovations
                      </h3>
                      <p className="text-muted-foreground">{smartject.innovation}</p>
                    </div>

                    <Separator />

                    {/* Use Cases */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Building className="h-5 w-5 text-cyan-500" />
                        Use Cases
                      </h3>
                      <p className="text-muted-foreground">{smartject.useCase}</p>
                    </div>

                    <Separator />

                    {/* Industries */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <Factory className="h-5 w-5 text-red-500" />
                        Industries
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {smartject.industries?.map((industry, index) => (
                          <Badge key={index} variant="secondary">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Business Functions */}
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                        <BriefcaseIcon className="h-5 w-5 text-orange-500" />
                        Business Functions
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {smartject.businessFunctions?.map((func, index) => (
                          <Badge key={index} variant="secondary">
                            {func}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Relevant Links */}
                    {smartject.relevantLinks && smartject.relevantLinks.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                            <LinkIcon className="h-5 w-5 text-blue-500" />
                            Relevant Links
                          </h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {smartject.relevantLinks.map((link, index) => (
                              <li key={index}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="need">
                  {isAuthenticated && user?.accountType === "paid" ? (
                    needProposals.length > 0 ? (
                      <div className="space-y-4">
                        {needProposals.map((proposal) => (
                          <div key={proposal.id} className="border rounded-md p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback>{proposal.userName.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{proposal.userName}</span>
                              </div>
                              <Badge variant="outline">{proposal.status}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{proposal.budget}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{proposal.timeline}</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => handleRespondToProposal(proposal.id)}
                              >
                                View Details
                              </Button>
                              <Button className="flex-1" onClick={() => handleNegotiate(proposal.id)}>
                                Negotiate
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground mb-4">No proposals yet</p>
                        <Button onClick={handleCreateProposal}>Create Proposal</Button>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground mb-4">
                        {!isAuthenticated
                          ? "Please log in to view proposals"
                          : "Upgrade to a paid account to view proposals"}
                      </p>
                      <Button asChild>
                        <Link href={!isAuthenticated ? "/auth/login" : "/upgrade"}>
                          {!isAuthenticated ? "Log In" : "Upgrade"}
                        </Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="provide">
                  {isAuthenticated && user?.accountType === "paid" ? (
                    provideProposals.length > 0 ? (
                      <div className="space-y-4">
                        {provideProposals.map((proposal) => (
                          <div key={proposal.id} className="border rounded-md p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback>{proposal.userName.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{proposal.userName}</span>
                              </div>
                              <Badge variant="outline">{proposal.status}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{proposal.budget}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{proposal.timeline}</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => handleRespondToProposal(proposal.id)}
                              >
                                View Details
                              </Button>
                              <Button className="flex-1" onClick={() => handleNegotiate(proposal.id)}>
                                Negotiate
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground mb-4">No proposals yet</p>
                        <Button onClick={handleCreateProposal}>Create Proposal</Button>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground mb-4">
                        {!isAuthenticated
                          ? "Please log in to view proposals"
                          : "Upgrade to a paid account to view proposals"}
                      </p>
                      <Button asChild>
                        <Link href={!isAuthenticated ? "/auth/login" : "/upgrade"}>
                          {!isAuthenticated ? "Log In" : "Upgrade"}
                        </Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <div className="flex gap-2">
                <Button
                  disabled={!isAuthenticated}
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  onClick={() => handleVote("believe")}
                >
                  <Heart className="h-4 w-4" />
                  <span>I Believe ({smartject.votes.believe})</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  onClick={() => handleVote("need")}
                  disabled={!isAuthenticated || user?.accountType === "free"}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>I Need ({smartject.votes.need})</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  onClick={() => handleVote("provide")}
                  disabled={!isAuthenticated || user?.accountType === "free"}
                >
                  <Wrench className="h-4 w-4" />
                  <span>I Provide ({smartject.votes.provide})</span>
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="flex gap-2">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="comments" className="mt-6">
            <TabsList>
              <TabsTrigger value="comments">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comments ({comments.length})
              </TabsTrigger>
              <TabsTrigger value="research">Research Papers</TabsTrigger>
            </TabsList>

            <TabsContent value="comments" ref={commentsRef}>
              <Card>
                <CardHeader>
                  <CardTitle>Discussion</CardTitle>
                  <CardDescription>Share your thoughts and insights about this smartject</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isAuthenticated ? (
                    <form onSubmit={handleSubmitComment}>
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Add your comment..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="min-h-[100px]"
                        />
                        <div className="flex justify-end">
                          <Button type="submit" disabled={!comment.trim()}>
                            Post Comment
                          </Button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <Card className="bg-muted/50">
                      <CardContent className="flex flex-col items-center justify-center py-6">
                        <p className="text-muted-foreground mb-4">Please log in to join the discussion</p>
                        <Button asChild>
                          <a href="/auth/login">Log In</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}

                  <div className="space-y-4 mt-6">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4 p-4 border rounded-lg">
                        <Avatar>
                          <AvatarImage src={comment.user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{comment.user.name}</h4>
                            <span className="text-xs text-muted-foreground">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p>{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research">
              <Card>
                <CardHeader>
                  <CardTitle>Research Papers</CardTitle>
                  <CardDescription>Academic research that inspired this smartject</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {researchPapers.map((paper, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">
                          <a href={paper.url} className="hover:underline">
                            {paper.title}
                          </a>
                        </h4>
                        <p className="text-sm text-muted-foreground">{paper.authors}</p>
                        <p className="text-sm text-muted-foreground">
                          {paper.journal}, {paper.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Create a Proposal</CardTitle>
              <CardDescription>
                {user?.accountType === "paid"
                  ? "Submit your proposal for this smartject"
                  : "Upgrade to create proposals"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                {user?.accountType === "paid"
                  ? "Create a detailed proposal specifying how you can implement this smartject or what your requirements are."
                  : "Paid accounts can create detailed proposals for smartjects they need or can provide."}
              </p>
              {isAuthenticated && user?.accountType === "paid" ? (
                <Button className="w-full" onClick={() => router.push(`/proposals/create?smartjectId=${id}`)}>
                  Create Proposal
                </Button>
              ) : (
                <Button
                  className="w-full"
                  asChild
                  disabled={!isAuthenticated} // Only disable if not authenticated
                >
                  <Link href={isAuthenticated ? "/upgrade" : "/auth/login"}>
                    {isAuthenticated ? "Upgrade to Paid Account" : "Log In to Create Proposal"}
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Smartjects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSmartjects
                  .filter((s) => s.id !== smartject.id)
                  .filter((s) => s.businessFunctions.some((tag) => smartject.businessFunctions.includes(tag)))
                  .slice(0, 3)
                  .map((s) => (
                    <div key={s.id} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">
                        <a href={`/smartject/${s.id}`} className="hover:underline">
                          {s.title}
                        </a>
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {s.businessFunctions.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{s.mission.substring(0, 100)}...</p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
