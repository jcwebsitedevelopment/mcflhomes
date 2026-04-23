import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
          position: 'relative',
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid rgba(201,168,76,0.25)',
            display: 'flex',
          }}
        />
        {/* Logo */}
        <img
          src="https://mcflhomes.com/logo.png"
          width={680}
          height={272}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
