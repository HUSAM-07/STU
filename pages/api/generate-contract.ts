import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('http://localhost:5000/api/generate-contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      })

      if (!response.ok) {
        throw new Error('Failed to generate contract')
      }

      const pdfBuffer = await response.buffer()

      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', 'attachment; filename=contract.pdf')
      res.send(pdfBuffer)
    } catch (error) {
      console.error('Error generating contract:', error)
      res.status(500).json({ error: 'Failed to generate contract' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}