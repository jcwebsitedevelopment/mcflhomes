import { ImageResponse } from 'next/og';

export const alt = 'Maria Cardona — Florida Realtor | MCFLHomes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0px',
        }}
      >
        {/* Gold top line */}
        <div style={{ width: '80px', height: '1px', backgroundColor: '#C9A84C', marginBottom: '32px', display: 'flex' }} />

        {/* Name */}
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '72px',
            fontWeight: '300',
            color: '#C9A84C',
            letterSpacing: '0.12em',
            display: 'flex',
          }}
        >
          MARIA CARDONA
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '28px',
            fontWeight: '300',
            color: 'rgba(245,240,232,0.7)',
            letterSpacing: '0.3em',
            marginTop: '16px',
            display: 'flex',
          }}
        >
          FLORIDA REALTOR
        </div>

        {/* Gold bottom line */}
        <div style={{ width: '80px', height: '1px', backgroundColor: '#C9A84C', marginTop: '32px', display: 'flex' }} />

        {/* Domain */}
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '18px',
            fontWeight: '300',
            color: 'rgba(201,168,76,0.5)',
            letterSpacing: '0.25em',
            marginTop: '28px',
            display: 'flex',
          }}
        >
          MCFLHOMES.COM
        </div>
      </div>
    ),
    { ...size }
  );
}
