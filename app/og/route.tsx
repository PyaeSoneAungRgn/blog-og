import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
        ? searchParams.get('title')?.slice(0, 100)
        : 'Blog | Pyae Sone Aung';

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '-.02em',
                    fontWeight: 700,
                    background: 'white',
                }}
            >
                <div
                    style={{
                        left: 42,
                        top: 42,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: 20,
                        }}
                    >
                        pyaesoneaung.dev
                    </span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: '20px 50px',
                        margin: '0 42px',
                        fontSize: 40,
                        width: 'auto',
                        maxWidth: 550,
                        textAlign: 'center',
                        backgroundColor: 'white',
                        color: 'black',
                        lineHeight: 1.4,
                    }}
                >
                    {title}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
