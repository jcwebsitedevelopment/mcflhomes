import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  try {
    const logoData = await readFile(join(process.cwd(), 'public/logo.png'), 'base64');
    const logoSrc = `data:image/png;base64,${logoData}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            backgroundColor: '#0A0A0A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(201,168,76,0.25)',
            padding: '40px',
          }}
        >
          <img
            src={logoSrc}
            width={680}
            style={{ objectFit: 'contain' }}
          />
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch {
    return new Response('Failed to generate image', { status: 500 });
  }
}
