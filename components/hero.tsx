import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Student Technical Union</h1>
      <p className="text-xl mb-8">Empowering students through technology and innovation</p>
      <Button asChild size="lg">
        <Link href="/tools">Explore Our Tools</Link>
      </Button>
    </section>
  )
}