import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'Jeremy Kamber';
    const description = searchParams.get('description') || 'Full-stack Developer & Product Manager';
    const type = searchParams.get('type') || 'Post';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#fff',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.1,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
          <div
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#666',
            }}
          >
            {type}
          </div>
          <div
            style={{
              fontSize: '84px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: '#000',
              marginBottom: '20px',
              wordBreak: 'break-word',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 400,
              color: '#666',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              left: '80px',
              fontSize: '24px',
              fontWeight: 700,
              color: '#000',
              borderTop: '2px solid #000',
              paddingTop: '20px',
              width: '200px',
            }}
          >
            jeremykamber.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
