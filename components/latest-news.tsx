import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const news = [
  {
    title: 'Upcoming Hackathon',
    date: 'June 15, 2023',
    description: 'Join us for a 24-hour coding challenge to solve real-world problems.',
  },
  {
    title: 'New AI Workshop Series',
    date: 'July 1, 2023',
    description: 'Learn about the latest developments in artificial intelligence and machine learning.',
  },
  {
    title: 'Tech Talk: Blockchain in Finance',
    date: 'July 10, 2023',
    description: 'Discover how blockchain is revolutionizing the financial industry.',
  },
]

export default function LatestNews() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
              <p className="mt-2">{item.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}