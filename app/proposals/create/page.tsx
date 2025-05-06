"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth-provider"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileUploader } from "@/components/file-uploader"
import { mockSmartjects } from "@/lib/mock-data"
import { ArrowLeft, ArrowRight, Save, Send, FileText, Calendar, DollarSign } from "lucide-react"
import { ProposalDocumentPreview } from "@/components/proposal-document-preview"
import type { DocumentVersion } from "@/components/document-version-history"

export default function CreateProposalPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const { user, isAuthenticated } = useAuth()
  const smartjectId = searchParams.get("smartjectId")

  // Find the smartject if ID is provided
  const smartject = smartjectId ? mockSmartjects.find((s) => s.id === smartjectId) : null

  // Form state
  const [currentStep, setCurrentStep] = useState(1)
  const [proposalType, setProposalType] = useState<"need" | "provide" | null>(null)
  const [formData, setFormData] = useState({
    title: smartject ? `Proposal for: ${smartject.title}` : "",
    smartjectId: smartjectId || "",
    description: "",
    scope: "",
    timeline: "",
    budget: "",
    deliverables: "",
    requirements: "",
    expertise: "",
    approach: "",
    team: "",
    additionalInfo: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSaving, setIsSaving] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [draftVersions, setDraftVersions] = useState<DocumentVersion[]>([
    {
      id: "draft-1",
      versionNumber: 1,
      date: new Date().toISOString(),
      author: user?.name || "User",
      changes: ["Initial draft creation"],
    },
  ])

  // Redirect if not authenticated or not a paid user
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    } else if (user?.accountType !== "paid") {
      router.push("/upgrade")
    }
  }, [isAuthenticated, router, user])

  if (!isAuthenticated || user?.accountType !== "paid") {
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles)
  }

  const handleSaveDraft = async () => {
    setIsSaving(true)

    // Create a new version entry
    const newVersion: DocumentVersion = {
      id: `draft-${draftVersions.length + 1}`,
      versionNumber: draftVersions.length + 1,
      date: new Date().toISOString(),
      author: user?.name || "User",
      changes: ["Draft updated"],
    }

    setDraftVersions([newVersion, ...draftVersions])

    // In a real app, we would call an API to save the draft
    setTimeout(() => {
      toast({
        title: "Draft saved",
        description: "Your proposal draft has been saved successfully.",
      })
      setIsSaving(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // In a real app, we would call an API to submit the proposal
    setTimeout(() => {
      toast({
        title: "Proposal submitted",
        description: "Your proposal has been submitted successfully.",
      })
      setIsSubmitting(false)
      router.push("/proposals")
    }, 1500)
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="proposalType">Proposal Type</Label>
              <RadioGroup
                id="proposalType"
                value={proposalType || ""}
                onValueChange={(value) => setProposalType(value as "need" | "provide")}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="need" id="need" />
                  <Label htmlFor="need" className="cursor-pointer">
                    I Need (I'm looking for someone to implement this smartject)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="provide" id="provide" />
                  <Label htmlFor="provide" className="cursor-pointer">
                    I Provide (I can implement this smartject for someone)
                  </Label>
                </div>
              </RadioGroup>
              {!proposalType && (
                <p className="text-sm text-muted-foreground">
                  Please select whether you need this smartject implemented or you can provide implementation services.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="smartjectId">Smartject</Label>
              {smartject ? (
                <div className="p-4 border rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{smartject.title}</h3>
                      <p className="text-sm text-muted-foreground">{smartject.problematics.substring(0, 100)}...</p>
                    </div>
                    <Badge>{smartjectId}</Badge>
                  </div>
                </div>
              ) : (
                <Input
                  id="smartjectId"
                  name="smartjectId"
                  placeholder="Enter Smartject ID"
                  value={formData.smartjectId}
                  onChange={handleInputChange}
                />
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Proposal Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter a descriptive title for your proposal"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Proposal Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Provide a brief overview of your proposal"
                rows={5}
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="scope">Project Scope</Label>
              <Textarea
                id="scope"
                name="scope"
                placeholder="Define the scope of the project"
                rows={4}
                value={formData.scope}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <Input
                id="timeline"
                name="timeline"
                placeholder="e.g., 3 months, 12 weeks"
                value={formData.timeline}
                onChange={handleInputChange}
              />
              <p className="text-sm text-muted-foreground">Estimated time to complete the project</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                name="budget"
                placeholder="e.g., $5,000, $10,000-$15,000"
                value={formData.budget}
                onChange={handleInputChange}
              />
              <p className="text-sm text-muted-foreground">Estimated budget for the project</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliverables">Deliverables</Label>
              <Textarea
                id="deliverables"
                name="deliverables"
                placeholder="List the specific deliverables expected from this project"
                rows={4}
                value={formData.deliverables}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )

      case 3:
        return proposalType === "need" ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="Specify your detailed requirements for this project"
                rows={6}
                value={formData.requirements}
                onChange={handleInputChange}
              />
              <p className="text-sm text-muted-foreground">
                Include any specific technical requirements, constraints, or preferences
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Any other information that might be helpful for potential providers"
                rows={4}
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="expertise">Expertise & Experience</Label>
              <Textarea
                id="expertise"
                name="expertise"
                placeholder="Describe your relevant expertise and experience for this project"
                rows={4}
                value={formData.expertise}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="approach">Implementation Approach</Label>
              <Textarea
                id="approach"
                name="approach"
                placeholder="Describe your approach to implementing this smartject"
                rows={4}
                value={formData.approach}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="team">Team & Resources</Label>
              <Textarea
                id="team"
                name="team"
                placeholder="Describe the team and resources you'll allocate to this project"
                rows={3}
                value={formData.team}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Any other information that might strengthen your proposal"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Supporting Documents</Label>
              <FileUploader onFilesChange={handleFileChange} />
              <p className="text-sm text-muted-foreground">
                Upload any supporting documents such as diagrams, specifications, or portfolios (max 5 files, 10MB each)
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium">Proposal Summary</h3>
              <div className="space-y-4 border rounded-md p-4">
                <div>
                  <p className="text-sm font-medium">Proposal Type</p>
                  <p className="capitalize">{proposalType}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium">Title</p>
                  <p>{formData.title || "Not specified"}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium">Description</p>
                  <p>{formData.description || "Not specified"}</p>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> Timeline
                    </p>
                    <p>{formData.timeline || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium flex items-center gap-1">
                      <DollarSign className="h-4 w-4" /> Budget
                    </p>
                    <p>{formData.budget || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium flex items-center gap-1">
                      <FileText className="h-4 w-4" /> Files
                    </p>
                    <p>{files.length} attached</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <ProposalDocumentPreview
                proposalId="draft"
                title={formData.title}
                smartjectTitle={smartject?.title || formData.smartjectId}
                type={proposalType || "need"}
                description={formData.description}
                scope={formData.scope}
                timeline={formData.timeline}
                budget={formData.budget}
                deliverables={formData.deliverables}
                requirements={formData.requirements}
                expertise={formData.expertise}
                approach={formData.approach}
                team={formData.team}
                additionalInfo={formData.additionalInfo}
                userName={user?.name || "User Name"}
                userEmail={user?.email || "user@example.com"}
                createdAt={new Date().toISOString()}
                versions={draftVersions}
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Create Proposal</h1>
            <p className="text-muted-foreground">Create a detailed proposal for a smartject</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">
              Step {currentStep} of 4:{" "}
              {currentStep === 1
                ? "Basic Information"
                : currentStep === 2
                  ? "Project Details"
                  : currentStep === 3
                    ? "Specific Requirements"
                    : "Documents & Review"}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentStep === 4 ? "Final Step" : `${currentStep * 25}% Complete`}
            </p>
          </div>
          <Progress value={currentStep * 25} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1
                ? "Basic Information"
                : currentStep === 2
                  ? "Project Details"
                  : currentStep === 3
                    ? proposalType === "need"
                      ? "Your Requirements"
                      : "Your Expertise & Approach"
                    : "Supporting Documents & Review"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1
                ? "Provide basic information about your proposal"
                : currentStep === 2
                  ? "Define the scope, timeline, and budget for the project"
                  : currentStep === 3
                    ? proposalType === "need"
                      ? "Specify your detailed requirements for this smartject"
                      : "Describe your expertise and approach to implementing this smartject"
                    : "Upload supporting documents and review your proposal"}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
          <CardFooter className="flex justify-between">
            <div>
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSaveDraft} disabled={isSaving}>
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? "Saving..." : "Save Draft"}
              </Button>
              {currentStep < 4 ? (
                <Button onClick={nextStep} disabled={currentStep === 1 && !proposalType}>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Proposal"}
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
