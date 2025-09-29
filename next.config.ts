/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const ContentSecurityPolicy = isProd
  ? `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval'
      https://www.googletagmanager.com
      https://www.google-analytics.com
      https://connect.facebook.net
      https://www.googleadservices.com
      https://googleads.g.doubleclick.net
      https://*.doubleclick.net
      https://*.google.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com data:;
    img-src 'self' data: blob:
      https://res.cloudinary.com
      https://*.doubleclick.net
      https://www.google.com
      https://www.google.co.th
      https://stats.g.doubleclick.net
      https://www.googleadservices.com
      https://www.google-analytics.com
      https://*.facebook.com
      https://*.facebook.net;
    connect-src 'self'
      https://*.google-analytics.com
      https://connect.facebook.net
      https://www.googleadservices.com
      https://googleads.g.doubleclick.net
      https://www.google.com
      https://www.google.co.th
      https://res.cloudinary.com
      https://*.facebook.com
      https://*.facebook.net
      https://*.doubleclick.net;
    frame-src
      https://*.googletagmanager.com
      https://*.doubleclick.net
      https://*.google.com
      https://*.facebook.com;
  `.replace(/\s{2,}/g, ' ').trim()
  : ''; // Dev mode: ไม่มี CSP

const nextConfig = {
  async headers() {
    const headers = [];

    if (isProd) {
      headers.push({
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;