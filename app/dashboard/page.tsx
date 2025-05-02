"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SmartjectCard } from "@/components/smartject-card"
import { useAuth } from "@/hooks/use-auth"
import { mockSmartjects } from "@/lib/mock-data"

export default function DashboardPage() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  // In a real app, we would fetch the user's smartjects from an API
  const believedSmartjects = mockSmartjects.slice(0, 3)
  const needSmartjects = user?.accountType === "paid" ? mockSmartjects.slice(3, 5) : []
  const provideSmartjects = user?.accountType === "paid" ? mockSmartjects.slice(5, 7) : []

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Track your smartjects, proposals, and contracts</p>
        </div>
        {user?.accountType === "free" && (
          <Button className="mt-4 md:mt-0" asChild>
            <a href="/upgrade">Upgrade to Paid Account</a>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Believed Smartjects</CardTitle>
            <CardDescription>Smartjects you've shown interest in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{believedSmartjects.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">I Need</CardTitle>
            <CardDescription>Smartjects you're looking to implement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{needSmartjects.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">I Provide</CardTitle>
            <CardDescription>Smartjects you can implement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{provideSmartjects.length}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="believe">
        <TabsList className="mb-6">
          <TabsTrigger value="believe">I Believe</TabsTrigger>
          <TabsTrigger value="need">I Need</TabsTrigger>
          <TabsTrigger value="provide">I Provide</TabsTrigger>
        </TabsList>

        <TabsContent value="believe" className="space-y-4">
          {believedSmartjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {believedSmartjects.map((smartject) => (
                <SmartjectCard key={smartject.id} smartject={smartject} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">You haven't shown interest in any smartjects yet.</p>
                <Button asChild>
                  <a href="/explore">Explore Smartjects</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="need" className="space-y-4">
          {user?.accountType === "paid" ? (
            needSmartjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {needSmartjects.map((smartject) => (
                  <SmartjectCard key={smartject.id} smartject={smartject} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-muted-foreground mb-4">You haven't indicated need for any smartjects yet.</p>
                  <Button asChild>
                    <a href="/explore">Explore Smartjects</a>
                  </Button>
                </CardContent>
              </Card>
            )
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">Upgrade to a paid account to indicate need for smartjects.</p>
                <Button asChild>
                  <a href="/upgrade">Upgrade Now</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="provide" className="space-y-4">
          {user?.accountType === "paid" ? (
            provideSmartjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {provideSmartjects.map((smartject) => (
                  <SmartjectCard key={smartject.id} smartject={smartject} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-muted-foreground mb-4">
                    You haven't indicated ability to provide any smartjects yet.
                  </p>
                  <Button asChild>
                    <a href="/explore">Explore Smartjects</a>
                  </Button>
                </CardContent>
              </Card>
            )
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">
                  Upgrade to a paid account to indicate you can provide smartjects.
                </p>
                <Button asChild>
                  <a href="/upgrade">Upgrade Now</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
