export type SmartjectType = {
  id: string
  title: string
  votes: {
    believe: number
    need: number
    provide: number
  }
  comments: number
  createdAt: string
  mission: string
  problematics: string
  scope: string
  audience: string
  howItWorks: string
  architecture: string
  innovation: string
  useCase: string
  industries: string[]
  businessFunctions: string[]
  relevantLinks: { title: string; url: string }[]
  image?: string
}

export type UserType = {
  id: string
  name: string
  email: string
  accountType: "free" | "paid"
  avatar?: string
}

export type ProposalType = {
  id: string
  smartjectId: string
  userId: string
  type: "need" | "provide"
  title: string
  description: string
  budget?: number
  timeline?: string
  status: "draft" | "submitted" | "accepted" | "rejected"
  createdAt: string
}
