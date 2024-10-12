import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Code, Users, Lightbulb } from 'lucide-react'

const features = [
  {
    title: 'Technical Workshops',
    description: 'Learn cutting-edge technologies from industry experts',
    icon: Code,
  },
  {
    title: 'Networking Events',
    description: 'Connect with like-minded students and professionals',
    icon: Users,
  },
  {
    title: 'Innovation Projects',
    description: 'Work on real-world projects to solve campus challenges',
    icon: Lightbulb,
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}