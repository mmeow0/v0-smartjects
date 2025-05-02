import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SmartjectCard } from "@/components/smartject-card"
import { SearchBar } from "@/components/search-bar"
import { mockSmartjects } from "@/lib/mock-data"

export default function SmartjectsHubPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Smartjects Hub</h1>
          <p className="text-muted-foreground">Explore all available AI implementation projects</p>
        </div>
        <div className="mt-4 md:mt-0">
          <SearchBar />
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Supply Chain</CardTitle>
              <CardDescription>24 smartjects</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Manufacturing</CardTitle>
              <CardDescription>18 smartjects</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Customer Support</CardTitle>
              <CardDescription>15 smartjects</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Finance</CardTitle>
              <CardDescription>12 smartjects</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Smartjects</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="popular">Most Voted</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSmartjects.map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSmartjects.slice(0, 6).map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSmartjects.slice(3, 9).map((smartject) => (
              <SmartjectCard key={smartject.id} smartject={smartject} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...mockSmartjects]
              .sort((a, b) => b.votes.believe - a.votes.believe)
              .slice(0, 6)
              .map((smartject) => (
                <SmartjectCard key={smartject.id} smartject={smartject} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
