import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'YWC';
  return new ImageResponse(
    (
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg,#0DB2E6,#22D3A8,#A3E635)',
        fontSize: 64,
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        {title}
      </div>
    )
  );
}
