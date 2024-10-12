import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contract Generator</CardTitle>
            <CardDescription>Generate custom contracts for your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/tools/contract-generator">Generate Contract</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Council Certificates</CardTitle>
            <CardDescription>Generate certificates for council members</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/tools/council-certificates">Generate Certificate</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Add more tool cards here */}
      </div>
    </div>
  )
}
