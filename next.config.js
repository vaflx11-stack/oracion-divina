/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/audios/:path*',
        headers: [
          { key: 'Content-Type', value: 'audio/mpeg' },
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000' },
        ],
      },
      {
        source: '/pdfs/:path*',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
        ],
      },
    ]
  },
}
module.exports = nextConfig