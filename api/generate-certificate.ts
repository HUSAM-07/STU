import { VercelRequest, VercelResponse } from '@vercel/node';
import { spawn } from 'child_process';
import path from 'path';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === 'POST') {
    const { name, role, academicYear, email } = req.body;

    const pythonProcess = spawn('python', [
      path.join(process.cwd(), 'scripts', 'generate_certificate.py'),
      name,
      role,
      academicYear,
      email
    ]);

    let outputData = '';
    let errorData = '';

    pythonProcess.stdout.on('data', (data) => {
      outputData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      errorData += data.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        res.status(200).json({ message: 'Certificate generated successfully', output: outputData });
      } else {
        res.status(500).json({ error: 'Failed to generate certificate', details: errorData });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
