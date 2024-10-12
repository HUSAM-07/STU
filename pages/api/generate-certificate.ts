import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, role, academicYear, email } = req.body

    const pythonProcess = spawn('python', ['scripts/generate_certificate.py', name, role, academicYear, email])

    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python script output: ${data}`)
    })

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python script error: ${data}`)
    })

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        res.status(200).json({ message: 'Certificate generated successfully' })
      } else {
        res.status(500).json({ error: 'Failed to generate certificate' })
      }
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
